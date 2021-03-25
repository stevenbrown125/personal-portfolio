import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import Sidebar from "../components/Sidebar"
import TaxonomyList from "../components/TaxonomyList"
import BlogPostStyles from "../styles/BlogPostStyles"
import ArticleNavigation from "../components/ArticleNavigation"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  let featuredImage = ""
  let featuredImageCaption = ""
  const { previous, next } = data
  if (post.frontmatter.imageDescription) {
    featuredImageCaption = (
      <figcaption>{post.frontmatter?.imageDescription}</figcaption>
    )
  }

  if (post.frontmatter.featuredImage.childImageSharp.gatsbyImageData) {
    featuredImage = (
      <figure>
        <GatsbyImage
          image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={post.frontmatter.title}
          className="featured-image"
        />
        {featuredImageCaption}
      </figure>
    )
  }

  const title = post.frontmatter.title || post.fields.slug
  return (
    <div className="container two-columns">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Sidebar args={["categories", "tags-post", "featured-project"]} />
      <div>
        <BlogPostStyles
          className="box"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            {featuredImage}
            <h1 itemProp="headline">{title}</h1>
            <time dateTime={post.frontmatter.date} itemProp="datePublished">
              Written on {post.frontmatter.date}
            </time>
          </header>
          <section>
            <div
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
              className="articleBody"
            />
          </section>
          <TaxonomyList
            list={post.frontmatter.tags}
            type="tag"
            className="tag-list"
          />
        </BlogPostStyles>
        <ArticleNavigation previous={previous} next={next} />
        <Bio />
      </div>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        categories
        title
        tags
        date(formatString: "dddd MMMM Do, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        imageDescription
      }
      id
      fields {
        slug
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
