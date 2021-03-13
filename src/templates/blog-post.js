import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import Sidebar from "../components/Sidebar"
import { FaLayerGroup, FaReadme } from "react-icons/fa"
import BlogPageStylesExtended from "../styles/BlogPageStylesExtended"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <BlogPageStylesExtended className="container">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Sidebar args={["categories", "tags-post"]} />
      <div>
        <div className="box blog-header">
          <h1 className="mark content title-section" itemProp="headline">
            <FaReadme /> {post.frontmatter.title}
          </h1>
          <p>Published on: {post.frontmatter.date}</p>
          <div className="category-list">
            <p>Categories</p>
            <ul>
              {post.frontmatter.categories.map(category => (
                <li className="mark" key={`category-list-post-${category}`}>
                  <Link to={`/blog/category/${category.toLowerCase()}`}>
                    <FaLayerGroup /> {category}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="content box">
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              {post.frontmatter.featuredImage?.childImageSharp?.fluid ? (
                <Img
                  fluid={post.frontmatter.featuredImage?.childImageSharp?.fluid}
                  className="featured-image"
                />
              ) : (
                ``
              )}
            </header>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          </article>
        </div>
        <Bio />
      </div>
    </BlogPageStylesExtended>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
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
            fluid(maxWidth: 580, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
      fields {
        slug
      }
    }
  }
`
