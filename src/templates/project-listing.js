import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/Bio"
import SEO from "../components/Seo"
import Sidebar from "../components/Sidebar"
import { FaCodeBranch } from "react-icons/fa"
import ListingsProject from "../components/ListingsProject"
import Pagination from "../components/Pagination"
import PortfolioListingStyles from "../styles/PortfolioListingStyles"

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
  return (
    <PortfolioListingStyles className="container two-columns">
      <SEO
        title={title}
        description={
          "On this page, find my latest projects with links to a live demo of the site."
        }
      />
      <Sidebar
        className="sidebar box"
        args={["tags-project", "latest-project"]}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header className="box">
          <h1 itemProp="headline" className="mark">
            <FaCodeBranch /> {title}
            {pagination}
          </h1>
        </header>
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
      filter: { frontmatter: { type: { eq: "project" }, tags: { eq: $id } } }
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
                transformOptions: { fit: INSIDE, grayscale: true }
              )
            }
          }
        }
      }
      totalCount
    }
  }
`
