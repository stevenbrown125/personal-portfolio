import React from "react"
import { StaticQuery, graphql } from "gatsby"
import DisplayTags from "./DisplayTags"
import { FaLaptopCode } from "react-icons/fa"

export default function ProjectTags() {
  return (
    <div>
      <h2 className="mark">
        <FaLaptopCode /> Project Tags
      </h2>
      <StaticQuery
        query={pageQuery}
        render={data => DisplayTags(data.allMarkdownRemark.distinct, "project")}
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
