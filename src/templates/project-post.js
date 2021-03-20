import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import Sidebar from "../components/Sidebar"
import { FaCodeBranch, FaTag } from "react-icons/fa"
import BlogPageStyles from "../styles/BlogPageStyles"

const ProjectTemplate = ({ data }) => {
  const post = data.markdownRemark
  let featuredImage = ""
  if (post.frontmatter.featuredImage.childImageSharp.gatsbyImageData) {
    featuredImage = (
      <figure>
        <GatsbyImage
          image={
            post.frontmatter.featuredImage?.childImageSharp.gatsbyImageData
          }
          className="featured-image"
          alt={post.frontmatter.title}
        />
        <figcaption>
          Check out this{" "}
          <a target="_blank" rel="noreferrer" href={post.frontmatter.demolink}>
            project live
          </a>
          !
        </figcaption>
      </figure>
    )
  }

  return (
    <BlogPageStyles className="container two-columns">
      <SEO
        title={"Latest Project Showcase"}
        description={
          "On this page, find my latest projects with links to a live demo of the site."
        }
      />
      <Sidebar args={["tags-project", "recent-blog-posts"]} />
      <article itemScope itemType="http://schema.org/Article">
        <header className="box">
          <h1 itemProp="headline" className="mark">
            <FaCodeBranch /> {post.frontmatter.title}
          </h1>
          <div>
            <p>
              Released on:{" "}
              <time dateTime={post.frontmatter.date} itemProp="datePublished">
                {post.frontmatter.date}
              </time>
            </p>
            <div className="category-list">
              <p>Tags</p>
              <ul>
                {post.frontmatter.tags.map(tag => (
                  <li className="mark" key={`tag-list-${tag}`}>
                    <FaTag />
                    <Link to={`/project/tag/${tag.toLowerCase()}`}>
                      {" "}
                      {tag}{" "}
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
        <Bio />
      </article>
    </BlogPageStyles>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query($id: String!) {
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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
