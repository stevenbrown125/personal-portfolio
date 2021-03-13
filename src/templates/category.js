import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/Bio"
import Sidebar from "../components/Sidebar"
import { FaReadme } from "react-icons/fa"
import BlogPageStyles from "../styles/BlogPageStyles"
import Pagination from "../components/Pagination"
import ListingsBlog from "../components/ListingsBlog"
import SEO from "../components/Seo"

export default function CategoryTemplate({ data, location }) {
  const posts = data.allMarkdownRemark.nodes
  const category = location.pathname.split("/")[
    location.pathname.split("/").length === 4
      ? location.pathname.split("/").length - 1
      : location.pathname.split("/").length - 2
  ]

  if (posts.length === 0) {
    return (
      <div>
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
        title={`Blog Post Category '${decodeURI(category)}'`}
        description={`On this page, you  will find all my blog posts that fall under the category '${category}'.`}
      />
      <Sidebar args={["categories", "tags-post"]} />
      <div>
        <div className="box blog-header">
          <h1 className="mark content title-section">
            <FaReadme /> Posts in category: {decodeURI(category)}
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
      filter: { frontmatter: { type: { eq: "post" }, categories: { eq: $id } } }
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
          tags
          categories
        }
      }
      totalCount
    }
  }
`
