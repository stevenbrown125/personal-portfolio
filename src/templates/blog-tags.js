import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/Bio"
import Sidebar from "../components/Sidebar"
import { FaTag } from "react-icons/fa"
import BlogPageStyles from "../styles/BlogPageStyles"
import Pagination from "../components/Pagination"
import ListingsBlog from "../components/ListingsBlog"
import SEO from "../components/Seo"

export default function TagTemplate({ data, location }) {
  const posts = data.allMarkdownRemark.nodes
  const tag = location.pathname.split("/")[
    location.pathname.split("/").length === 4
      ? location.pathname.split("/").length - 1
      : location.pathname.split("/").length - 2
  ]
  return (
    <BlogPageStyles className="container">
      <SEO
        title={`Posts tagged '${decodeURI(tag)}'`}
        description={`On this page, you  will find all my blog posts that have been tagged with the word  '${tag}'.`}
      />
      <Sidebar className="box" args={["categories", "tags-post"]} />

      <div>
        <div className="box blog-header">
          <h1 className="mark content title-section">
            <FaTag /> Posts with the tag: {decodeURI(tag)}
          </h1>
          <Pagination
            pathbase="/blog/"
            totalItems={data.allMarkdownRemark.totalCount}
            location={location}
          />
        </div>
        <div className="box">
          <ListingsBlog posts={posts} />
        </div>
        <Bio />
      </div>
    </BlogPageStyles>
  )
}

export const pageQuery = graphql`
  query($id: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" }, tags: { eq: $id } } }
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
        }
      }
      totalCount
    }
  }
`
