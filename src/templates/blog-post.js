import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import Sidebar from "../components/Sidebar"
import { FaLayerGroup, FaReadme } from "react-icons/fa"
import BlogPageStyles from "../styles/BlogPageStyles"

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
    <BlogPageStyles className="container two-columns">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Sidebar args={["categories", "tags-post"]} />
      <article itemScope itemType="http://schema.org/Article">
        <header className="box">
          <h1 itemProp="headline" className="mark">
            <FaReadme /> {post.frontmatter.title}
          </h1>
          <div>
            <p>
              Written on{" "}
              <time dateTime={post.frontmatter.date} itemProp="datePublished">
                {post.frontmatter.date}
              </time>
            </p>
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
        </header>
        <section className="box content">
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
      </article>
    </BlogPageStyles>
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
