import React from "react"
import { StaticQuery, graphql } from "gatsby"
import DisplayTechnologies from "./DisplayTechnologies"
import { FaLaptopCode } from "react-icons/fa"

export default function ProjectTags() {
  return (
    <div>
      <h2 className="mark">
        <FaLaptopCode /> Technologies
      </h2>
      <StaticQuery
        query={pageQuery}
        render={data =>
          DisplayTechnologies(data.allMarkdownRemark.distinct, "project")
        }
      />
    </div>
  )
}

const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___title, order: DESC }
    ) {
      distinct(field: frontmatter___tags)
    }
  }
`
