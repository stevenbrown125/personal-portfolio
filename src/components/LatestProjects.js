import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaCodeBranch } from "react-icons/fa"
import ListingsProjectFeatured from "./ListingsProjectFeatured"

export default function LatestProjects() {
  return (
    <div>
      <h2 className="mark">
        <FaCodeBranch /> Featured Project
      </h2>
      <StaticQuery
        query={pageQuery}
        render={data => (
          <ListingsProjectFeatured projects={data.allMarkdownRemark.nodes} />
        )}
      />
    </div>
  )
}

const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "project" }, featured: { eq: true } }
      }
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
