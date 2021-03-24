import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import Sidebar from "../components/Sidebar"
import { FaReadme } from "react-icons/fa"
import BlogPostStyles from "../styles/BlogPostStyles"
import TaxonomyList from "../components/TaxonomyList"

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
  return (
    <div className="container two-columns">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Sidebar args={["categories", "tags-post"]} />
      <BlogPostStyles itemScope itemType="http://schema.org/Article">
        <header className="box">
          <h1 itemProp="headline" className="mark">
            <FaReadme /> {post.frontmatter.title}
          </h1>
          <div>
            <time dateTime={post.frontmatter.date} itemProp="datePublished">
              Written on {post.frontmatter.date}
            </time>

            <TaxonomyList list={post.frontmatter.categories} type="category" />
          </div>
        </header>
        <section className="box">
          {featuredImage}
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </section>
        <section className="blog-post-nav box content">
          <h2>Looking for more?</h2>
          <nav>
            <ul>
              <li>
                {previous && (
                  <Link to={`/blog${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`/blog${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </section>
        <Bio />
      </BlogPostStyles>
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
