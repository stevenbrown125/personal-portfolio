import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaCodeBranch } from "react-icons/fa"
import ListingsProject from "./ListingsProject"

export default function LatestProjects() {
  return (
    <div>
      <h2 className="mark">
        <FaCodeBranch /> Latest Project
      </h2>
      <StaticQuery
        query={pageQuery}
        render={data => (
          <ListingsProject projects={data.allMarkdownRemark.nodes} />
        )}
      />
    </div>
  )
}

const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          demolink
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        fields {
          slug
        }
        excerpt
        id
      }
    }
  }
`
