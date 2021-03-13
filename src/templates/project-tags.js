import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/Bio"
import Sidebar from "../components/Sidebar"
import { FaLaptopCode } from "react-icons/fa"
import BlogPageStyles from "../styles/BlogPageStyles"
import Pagination from "../components/Pagination"
import ListingsProject from "../components/ListingsProject"
import SEO from "../components/Seo"

export default function TagTemplate({ data, location }) {
  const projects = data.allMarkdownRemark.nodes
  const tag = location.pathname.split("/")[
    location.pathname.split("/").length - 1
  ]

  return (
    <BlogPageStyles className="container">
      <SEO
        title={`Projects tagged '${decodeURI(tag)}'`}
        description={`On this page, you  will find all my project's that have been tagged with the word '${tag}'.`}
      />
      <Sidebar className="box" args={["tags-project", "latest-project"]} />
      <div>
        <div className="box blog-header">
          <h1 className="mark content title-section">
            <FaLaptopCode /> Projects with the tag: {decodeURI(tag)}
          </h1>
          <Pagination
            pathbase="/portfolio/"
            totalItems={data.allMarkdownRemark.totalCount}
            location={location}
          />
        </div>
        <div className="box">
          <ListingsProject projects={projects} type="project" />
        </div>
        <Bio />
      </div>
    </BlogPageStyles>
  )
}

export const pageQuery = graphql`
  query($id: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" }, tags: { eq: $id } } }
      limit: $limit
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          categories
          date(formatString: "dddd MMMM Do, YYYY")
          title
          description
          tags
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 580, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
      totalCount
    }
  }
`
