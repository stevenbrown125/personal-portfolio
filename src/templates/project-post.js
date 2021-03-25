import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import Sidebar from "../components/Sidebar"
import { FaCodeBranch } from "react-icons/fa"
import BlogPostStyles from "../styles/BlogPostStyles"
import ArticleNavigation from "../components/ArticleNavigation"
import TaxonomyList from "../components/TaxonomyList"

const ProjectTemplate = ({ data }) => {
  const project = data.markdownRemark
  let featuredImage = ""
  const { previous, next } = data

  if (project.frontmatter.featuredImage.childImageSharp.gatsbyImageData) {
    featuredImage = (
      <figure>
        <GatsbyImage
          image={
            project.frontmatter.featuredImage?.childImageSharp.gatsbyImageData
          }
          className="featured-image"
          alt={project.frontmatter.title}
        />
      </figure>
    )
  }

  return (
    <div className="container two-columns">
      <SEO
        title={project.frontmatter.title}
        description={project.frontmatter.description || project.excerpt}
      />
      <Sidebar args={["tags-project", "recent-blog-projects"]} />
      <div>
        <BlogPostStyles
          className="box"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            {featuredImage}
            <h1 itemProp="headline">
              <FaCodeBranch /> {project.frontmatter.title}
            </h1>
            <time dateTime={project.frontmatter.date} itemProp="datePublished">
              Released on: {project.frontmatter.date}
            </time>
          </header>
          <section>
            <div
              dangerouslySetInnerHTML={{ __html: project.html }}
              itemProp="articleBody"
              className="articleBody"
            />
            <div>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.frontmatter.demolink}
                >
                  Check out this project live!
                </a>
              </p>
            </div>
          </section>
          <TaxonomyList
            list={project.frontmatter.tags}
            type="technology"
            className="tag-list"
          />
        </BlogPostStyles>
        <ArticleNavigation previous={previous} next={next} type="project" />
        <Bio />
      </div>
    </div>
  )
}
export default ProjectTemplate

export const pageQuery = graphql`
  query($id: String!, $previousPostId: String, $nextPostId: String) {
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
