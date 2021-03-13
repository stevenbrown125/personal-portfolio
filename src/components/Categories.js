import React from "react"
import { StaticQuery, graphql } from "gatsby"
import DisplayCategories from "./DisplayCategories"
import { FaLayerGroup } from "react-icons/fa"

export default function Categories() {
  return (
    <div>
      <h2 className="mark">
        <FaLayerGroup /> Categories
      </h2>
      <StaticQuery
        query={pageQuery}
        render={data => DisplayCategories(data.allMarkdownRemark.distinct)}
      />
    </div>
  )
}

const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___title, order: DESC }
    ) {
      distinct(field: frontmatter___categories)
    }
  }
`
