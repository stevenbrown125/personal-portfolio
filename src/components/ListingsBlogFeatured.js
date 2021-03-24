import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import TaxonomyList from "./TaxonomyList"
import BlogListingItemStyles from "../styles/BlogListingItemStyles"

const FeaturedArticleStyles = styled(BlogListingItemStyles)`
  border: solid 1px var(--grey);
  img {
    z-index: -1;
  }
  ul {
    position: absolute;
    top: 0;
    right: 1rem;
  }
  .ribbon-wrapper {
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

export default function ListingsBlogFeatured({ posts }) {
  const post = posts[0]
  let featuredImage = ""
  let featuredImageCaption = ""
  if (post.frontmatter.imageDescription) {
    featuredImageCaption = (
      <figcaption>{post.frontmatter?.imageDescription}</figcaption>
    )
  }

  if (post.frontmatter.featuredImage.childImageSharp.gatsbyImageData) {
    featuredImage = (
      <figure>
        <GatsbyImage
          image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={post.frontmatter.title}
          className="featured-image"
        />
        {featuredImageCaption}
      </figure>
    )
  }

  const title = post.frontmatter.title || post.fields.slug
  return (
    <FeaturedArticleStyles itemScope itemType="http://schema.org/Article">
      <div className="ribbon-wrapper">
        <div className="ribbon">FEATURED</div>
      </div>
      <header>
        {featuredImage}
        <h3>
          <Link to={`/blog${post.fields.slug}`} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h3>
        <time dateTime={post.frontmatter.date} itemProp="datePublished">
          Written on {post.frontmatter.date}
        </time>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </section>
      <TaxonomyList
        list={post.frontmatter.tags}
        type="tag"
        className="tag-list"
      />
    </FeaturedArticleStyles>
  )
}
