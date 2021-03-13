import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/Bio"
import SEO from "../components/Seo"
import Sidebar from "../components/Sidebar"
import { FaRegNewspaper } from "react-icons/fa"
import BlogPageStyles from "../styles/BlogPageStyles"
import ListingsBlog from "../components/ListingsBlog"
import Pagination from "../components/Pagination"

export default function BlogIndex({ data, location }) {
  const posts = data.allMarkdownRemark.nodes
  if (posts.length === 0) {
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
    <BlogPageStyles className="container">
      <SEO
        title={`All Blog Posts`}
        description={`On this page, you will find all my latest blog posts.`}
      />
      <Sidebar className="sidebar box" args={["categories", "tags-post"]} />
      <div>
        <div className="box blog-header">
          <h1 className="mark content title-section">
            <FaRegNewspaper /> My Blog Posts
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
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
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
