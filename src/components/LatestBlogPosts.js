import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ListingsBlog from "./ListingsBlog"
import { FaBlog } from "react-icons/fa"

export default function LastestBlogPosts() {
  return (
    <div>
      <h2 className="mark">
        <FaBlog /> Recent Blog Posts
      </h2>
      <StaticQuery
        query={pageQuery}
        render={data => <ListingsBlog posts={data.allMarkdownRemark.nodes} />}
      />
    </div>
  )
}

const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          categories
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`
