import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/Bio"
import SEO from "../components/Seo"
import Sidebar from "../components/Sidebar"
import { FaCodeBranch } from "react-icons/fa"
import ListingsProject from "../components/ListingsProject"
import Pagination from "../components/Pagination"
import BlogPageStylesExtended from "../styles/BlogPageStylesExtended"

export default function BlogIndex({ data, location }) {
  const projects = data.allMarkdownRemark.nodes
  if (projects.length === 0) {
    return (
      <div>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
        <Bio />
      </div>
    )
  }

  return (
    <BlogPageStylesExtended className="container">
      <SEO
        title={`Latest Project Showcase`}
        description={`On this page, find my latest projects with links to a live demo of the site.`}
      />
      <Sidebar className="box" args={["tags-project", "latest-project"]} />
      <div>
        <div className="box blog-header">
          <h1 className="mark content title-section">
            <FaCodeBranch /> My Projects
          </h1>

          <Pagination
            pathbase="/portfolio/"
            totalItems={data.allMarkdownRemark.totalCount}
            location={location}
          />
        </div>
        <div className="box">
          <ListingsProject projects={projects} />
        </div>
        <Bio />
      </div>
    </BlogPageStylesExtended>
  )
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
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
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 580, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      totalCount
    }
  }
`
