import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/Bio"
import SEO from "../components/Seo"
import Sidebar from "../components/Sidebar"
import { FaRegNewspaper } from "react-icons/fa"
import ListingsBlog from "../components/ListingsBlog"
import Pagination from "../components/Pagination"
import BlogPageStyles from "../styles/BlogPageStyles"
import ListingsBlogFeatured from "../components/ListingsBlogFeatured"

export default function BlogIndex({ data, location, pageContext }) {
  let posts = data.byTag.nodes
  if (data.byTag.totalCount === 0) {
    posts = data.byCategory.nodes
  }
  let title = "All Blog Posts"
  let pagination = ""
  if (pageContext.id) {
    title = `${pageContext.id} blog posts`
  }
  if (pageContext.numPages > 1) {
    pagination = <Pagination pageContext={pageContext} location={location} />
  }
  return (
    <BlogPageStyles className="container two-columns">
      <SEO
        title={title}
        description={"On this page, you will find all my latest blog posts."}
      />
      <Sidebar className="sidebar box" args={["categories", "tags-post"]} />
      <article itemScope itemType="http://schema.org/Article">
        <header className="box">
          <h1 itemProp="headline" className="mark">
            <FaRegNewspaper /> {title}{" "}
            <span className="pagination">{pagination}</span>
          </h1>
        </header>
        <section className="box">
          <ListingsBlogFeatured posts={data.featured.nodes} />
        </section>
        <section className="box">
          <ListingsBlog posts={posts} />
        </section>
        <Bio />
      </article>
    </BlogPageStyles>
  )
}

export const pageQuery = graphql`
  query($id: String, $skip: Int!, $limit: Int!) {
    byTag: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq: "post" }
          tags: { eq: $id }
          featured: { nin: true }
        }
      }
      limit: $limit
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "dddd MMMM Do, YYYY")
          title
          description
          categories
          tags
        }
      }
      totalCount
    }
    byCategory: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq: "post" }
          categories: { eq: $id }
          featured: { nin: true }
        }
      }
      limit: $limit
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "dddd MMMM Do, YYYY")
          title
          description
          categories
          tags
        }
      }

      totalCount
    }
    featured: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" }, featured: { eq: true } } }
      limit: 1
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "dddd MMMM Do, YYYY")
          title
          description
          categories
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, height: 400)
            }
          }
          imageDescription
        }
      }
    }
  }
`
