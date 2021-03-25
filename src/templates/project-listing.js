/* eslint-disable multiline-ternary */
import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/Bio"
import SEO from "../components/Seo"
import Sidebar from "../components/Sidebar"
import { FaCodeBranch } from "react-icons/fa"
import ListingsProject from "../components/ListingsProject"
import Pagination from "../components/Pagination"
import PortfolioListingStyles from "../styles/PortfolioListingStyles"
import ListingsProjectFeatured from "../components/ListingsProjectFeatured"

export default function BlogIndex({ data, location, pageContext }) {
  const projects = data.allMarkdownRemark.nodes
  let pagination = ""
  let title = "Project Showcase"
  if (pageContext.id) {
    title = `Projects using ${pageContext.id}`
  }
  if (pageContext.numPages > 1) {
    pagination = <Pagination pageContext={pageContext} location={location} />
  }
  // Show Featured Project only on the First Page of the Portfolio
  const featuredProject =
    pageContext.currentPage === 1 && !pageContext.id ? (
      <section className="box">
        <ListingsProjectFeatured projects={data.featured.nodes} />
      </section>
    ) : (
      ""
    )
  return (
    <PortfolioListingStyles className="container two-columns">
      <SEO
        title={title}
        description={
          "On this page, find my latest projects with links to a live demo of the site."
        }
      />
      <Sidebar args={["tags-project", "latest-blog-posts"]} />
      <article itemScope itemType="http://schema.org/Article">
        <header className="box">
          <h1 itemProp="headline" className="mark">
            <FaCodeBranch /> {title}
            {pagination}
          </h1>
        </header>
        {featuredProject}
        <section>
          <ListingsProject projects={projects} />
        </section>
        <Bio />
      </article>
    </PortfolioListingStyles>
  )
}

export const pageQuery = graphql`
  query($id: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq: "project" }
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
          demolink
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                transformOptions: { grayscale: true, cropFocus: NORTH }
              )
            }
          }
        }
      }
      totalCount
    }
    featured: allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "project" }, featured: { eq: true } }
      }
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
              gatsbyImageData(
                layout: FULL_WIDTH
                transformOptions: { cropFocus: NORTH }
              )
            }
          }
          imageDescription
        }
      }
    }
  }
`
