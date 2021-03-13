import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Bio from "../components/Bio"
import Sidebar from "../components/Sidebar"
import { FaReadme, FaTag } from "react-icons/fa"
import SEO from "../components/Seo"
import BlogPageStylesExtended from "../styles/BlogPageStylesExtended"

const ProjectTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <BlogPageStylesExtended className="container">
      <SEO
        title={`Latest Project Showcase`}
        description={`On this page, find my latest projects with links to a live demo of the site.`}
      />
      <Sidebar args={["tags-project", "recent-blog-posts"]} />
      <div>
        <div className="box blog-header">
          <h1 className="mark content title-section" itemProp="headline">
            <FaReadme /> {post.frontmatter.title}
          </h1>
          <p>Released on: {post.frontmatter.date}</p>
          <div className="category-list">
            <p>Tags:</p>
            <ul>
              {post.frontmatter.tags.map(tag => (
                <li className="mark" key={`tag-list-${tag}`}>
                  <FaTag />
                  <Link to={`/project/tag/${tag.toLowerCase()}`}> {tag} </Link>
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
              <figure>
                <Img
                  fluid={post.frontmatter.featuredImage?.childImageSharp.fluid}
                  className="featured-image"
                />
                <figcaption>
                  Check out this{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={post.frontmatter.demolink}
                  >
                    project live
                  </a>
                  !
                </figcaption>
              </figure>
              <h2>Project description:</h2>
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

export default ProjectTemplate

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      excerpt

      frontmatter {
        title
        tags
        demolink

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
