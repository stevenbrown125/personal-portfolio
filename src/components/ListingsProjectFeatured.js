import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import TaxonomyList from "./TaxonomyList"
import PortfolioListingStyles from "../styles/PortfolioListingStyles"

const FeaturedArticleStyles = styled(PortfolioListingStyles)`
  border: solid 1px var(--grey);

  position: relative;
  img {
    z-index: 0;
  }
  ul {
    position: absolute;
    top: 0;
    right: 1rem;
  }
  .ribbon-wrapper {
    z-index: 1;
    width: 125px;
    height: 98px;
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    .ribbon {
      font: bold 15px sans-serif;
      text-align: center;
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      position: relative;
      padding: 7px 0;
      top: 22px;
      left: -60px;
      width: 200px;
      background-color: var(--red);
      color: var(--black);
    }
  }

  @media only screen and (max-width: 800px) {
    ul {
      position: inherit;
      margin-block-start: 0;
      padding: inherit;
    }
  }
`

export default function ListingsProjectFeatured({ projects }) {
  const project = projects[0]
  let featuredImage = ""
  let featuredImageCaption = ""
  if (project.frontmatter.imageDescription) {
    featuredImageCaption = (
      <figcaption>{project.frontmatter?.imageDescription}</figcaption>
    )
  }

  if (project.frontmatter.featuredImage.childImageSharp.gatsbyImageData) {
    featuredImage = (
      <figure>
        <GatsbyImage
          image={
            project.frontmatter.featuredImage.childImageSharp.gatsbyImageData
          }
          alt={project.frontmatter.title}
          className="featured-image"
        />
        {featuredImageCaption}
      </figure>
    )
  }

  const title = project.frontmatter.title || project.fields.slug
  return (
    <FeaturedArticleStyles itemScope itemType="http://schema.org/Article">
      <div className="ribbon-wrapper">
        <div className="ribbon">FEATURED</div>
      </div>
      <header>
        {featuredImage}
        <h3>
          <Link to={`/project${project.fields.slug}`} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h3>
        <time dateTime={project.frontmatter.date} itemProp="datePublished">
          Written on {project.frontmatter.date}
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
      <TaxonomyList
        list={project.frontmatter.tags}
        type="technology"
        className="tag-list"
      />
    </FeaturedArticleStyles>
  )
}
