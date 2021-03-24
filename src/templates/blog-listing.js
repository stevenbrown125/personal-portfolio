/* eslint-disable multiline-ternary */
import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/Bio"
import SEO from "../components/Seo"
import Sidebar from "../components/Sidebar"
import { FaRegNewspaper } from "react-icons/fa"
import ListingsBlog from "../components/ListingsBlog"
import Pagination from "../components/Pagination"
import BlogListingStyles from "../styles/BlogListingStyles"
import ListingsBlogFeatured from "../components/ListingsBlogFeatured"

export default function BlogIndex({ data, location, pageContext }) {
  // Get the posts (will either by by Category or by Tag)
  const posts =
    data.byTag.totalCount === 0 ? data.byCategory.nodes : data.byTag.nodes

  // If there this is a tag / category collection, include that in the title
  const title = pageContext.id
    ? `${pageContext.id} blog posts`
    : "All Blog Posts"

  // Show the pagination component only if there is more than one page
  const pagination =
    pageContext.numPages > 1 ? (
      <Pagination pageContext={pageContext} location={location} />
    ) : (
      ""
    )

  // Show Featured Post only on the First Page of the Blog
  const featuredPost =
    pageContext.currentPage === 1 && !pageContext.id ? (
      <section className="box">
        <ListingsBlogFeatured posts={data.featured.nodes} />
      </section>
    ) : (
      ""
    )
  // Render
  return (
    <BlogListingStyles className="container two-columns">
      <SEO
        title={title}
        description={"On this page, you will find all my latest blog posts."}
      />
      <Sidebar className="sidebar box" args={["categories", "tags-post"]} />
      <article itemScope itemType="http://schema.org/Article">
        <header className="box">
          <h1 itemProp="headline" className="mark">
            <FaRegNewspaper /> {title} {pagination}
          </h1>
        </header>
        {featuredPost}
        <section className="box">
          <ListingsBlog posts={posts} />
        </section>
        <Bio />
      </article>
    </BlogListingStyles>
  )
}

export const pageQuery = graphql`
  query($id: String, $skip: Int!, $limit: Int!) {
    byTag: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq: "post" }
          tags: { eq: $id }
          featured: { nin: true }
        }
      }
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
    byCategory: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq: "post" }
          categories: { eq: $id }
          featured: { nin: true }
        }
      }
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
    featured: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" }, featured: { eq: true } } }
      limit: 1
      sort: { fields: frontmatter___date, order: DESC }
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
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          imageDescription
        }
      }
    }
  }
`
