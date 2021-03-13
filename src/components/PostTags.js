import React from "react"
import { StaticQuery, graphql } from "gatsby"
import DisplayTags from "./DisplayTags"
import { FaTags } from "react-icons/fa"

export default function PostTags() {
  return (
    <div>
      <h2 className="mark">
        <FaTags /> Blog Post Tags
      </h2>
      <StaticQuery
        query={pageQuery}
        render={data => DisplayTags(data.allMarkdownRemark.distinct, "post")}
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
      distinct(field: frontmatter___tags)
    }
  }
`
