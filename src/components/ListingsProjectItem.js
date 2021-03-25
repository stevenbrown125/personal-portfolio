import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import PortfolioListingItemStyles from "../styles/PortfolioListingItemStyles"
import TaxonomyList from "./TaxonomyList"

export default function ListingsProjectItem({ project }) {
  const title = project.frontmatter.title || project.fields.slug
  return (
    <PortfolioListingItemStyles
      className="project-list-item box"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <figure>
          <GatsbyImage
            image={
              project.frontmatter.featuredImage?.childImageSharp.gatsbyImageData
            }
            className="featured-image"
            alt={project.frontmatter.title}
          />
          <figcaption>
            <a
              target="_blank"
              rel="noreferrer"
              href={project.frontmatter.demolink}
            >
              Check this project out live!
            </a>
          </figcaption>
        </figure>
        <h3>
          <Link to={`/project${project.fields.slug}`} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h3>
        <time dateTime={project.frontmatter.date} itemProp="datePublished">
          Released on {project.frontmatter.date}
        </time>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: project.frontmatter.description || project.excerpt,
          }}
          itemProp="description"
        />
      </section>
      <TaxonomyList list={project.frontmatter.tags} type="technology" />
    </PortfolioListingItemStyles>
  )
}
