require("dotenv").config()
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// First we modify the GraphQL Schema
// Here we add a few custom types so that we can query them later
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type SiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }
    type Author {
      name: String
      summary: String
    }
    type Social {
      twitter: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }
    type Fields {
      slug: String
    }
  `
  createTypes(typeDefs)
}

// Next we will create our pages
// We created some async functions to organize our data
async function createBlogPosts({ graphql, actions, reporter }) {
  const { createPage } = actions

  // Define the page templates
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectTempate = path.resolve(`./src/templates/project-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
        nodes {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            categories
            date
            description
            title
            tags
            type
          }
          html
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const items = result.data.allMarkdownRemark.nodes
  const itemsPerPage = parseInt(process.env.ITEMS_PER_PAGE)
  const categories = []
  const posts = []
  const projects = []
  const postTags = []
  const projectTags = []

  // Create blog posts pages
  // But only if there's at least one markdown file found in "content/blog" (defined in gatsby-config.js)
  if (items.length > 0) {
    items.forEach(item => {
      // First, determine each item as either a blog post or a project so we can use the right template
      if (item.frontmatter.type === "post") {
        // Add  it to our blog posts array
        posts.push(item)
        // Add the metadata to our master lists to be added to the graphql api later
        if (item.frontmatter.categories)
          item.frontmatter.categories.forEach(cat => categories.push(cat))
        if (item.frontmatter.tags)
          item.frontmatter.tags.forEach(tag => postTags.push(tag))
        // And then create the corresponding blog post page
        createPage({
          path: `/blog${item.fields.slug}`,
          component: blogPost,
          context: {
            id: item.id,
          },
        })
      } else {
        // if it's not a blog post, it must be a Project
        projects.push(item)
        if (item.frontmatter.tags)
          item.frontmatter.tags.forEach(tag => projectTags.push(tag))
        createPage({
          path: `/project${item.fields.slug}`,
          component: projectTempate,
          context: {
            id: item.id,
          },
        })
      }
    })

    // Create the default Blog Listing Page
    createMainBlogPageListings(posts, itemsPerPage, createPage)
    // Create the default Portfolio Listing  Page
    createMainPortfolioPageListings(projects, itemsPerPage, createPage)
  }

  // Create tag listing pages
  // Using the arrays we created earlier as master lists

  if (postTags.length > 0) {
    createTagPages(postTags, "blog", itemsPerPage, createPage)
  }
  if (projectTags.length > 0) {
    createTagPages(projectTags, "project", itemsPerPage, createPage)
  }

  // Create the category listing pages
  // Using the array we created ealier as a master list
  if (categories.length > 0) {
    createCategoryPages(categories, itemsPerPage, createPage)
  }
}

// functions

function countOccurrences(arr, val) {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
}

function createMainBlogPageListings(posts, itemsPerPage, createPage) {
  const template = path.resolve(`./src/templates/blog-listing.js`)
  const numPages = Math.ceil(posts.length / itemsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    const path = `/blog${i === 0 ? `` : `/${i + 1}`}`
    createPage({
      path: path,
      component: template,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

function createMainPortfolioPageListings(projects, itemsPerPage, createPage) {
  const template = path.resolve(`./src/templates/project-listing.js`)
  const numPages = Math.ceil(projects.length / itemsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    const path = `/portfolio${i === 0 ? `` : `/${i + 1}`}`
    createPage({
      path: path,
      component: template,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

function createTagPages(tags, type, itemsPerPage, createPage) {
  const tagPostTemplate = path.resolve(`./src/templates/blog-tags.js`)
  const tagProjectTemplate = path.resolve(`./src/templates/project-tags.js`)

  const uTags = [...new Set(tags)]
  uTags.forEach(tag => {
    const numPages = Math.ceil(countOccurrences(tags, tag) / itemsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      const path = `/${type}/tag/${tag.toLowerCase()}${
        i === 0 ? `` : `/${i + 1}`
      }`
      createPage({
        path: path,
        component: type === "blog" ? tagPostTemplate : tagProjectTemplate,
        context: {
          id: tag,
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}

function createCategoryPages(categories, itemsPerPage, createPage) {
  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  // Get a unique array of categories so we can ensure we don't double tap
  const uCategories = [...new Set(categories)]

  uCategories.forEach(category => {
    // Count how many pages there should be by counting how many posts have the category listed
    const numPages = Math.ceil(
      countOccurrences(categories, category) / itemsPerPage
    )

    Array.from({ length: numPages }).forEach((_, i) => {
      const path = `/blog/category/${category.toLowerCase()}${
        i === 0 ? `` : `/${i + 1}`
      }`
      createPage({
        path: path,
        component: categoryTemplate,
        context: {
          id: category,
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}

exports.createPages = async params => {
  await Promise.all([createBlogPosts(params)])
}

// While Nodes are created, we generate new Nodes Fields based on the data passed
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
      .replace(/\s+/g, "-")
      .toLowerCase()

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
