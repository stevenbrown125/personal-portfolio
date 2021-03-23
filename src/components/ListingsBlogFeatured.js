import React from "react"
import { Link } from "gatsby"
import { FaTag } from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const FeaturedArticleStyles = styled.article`
  position: relative;
  z-index: 1;
  padding: 0 0 1rem 0;
  background: rgba(239, 239, 239, 0);
  img {
    z-index: -1;
  }
  section,
  header {
    padding: 0 3rem;
    line-height: 2.8rem;
    font-size: 118%;
  }

  ul {
    position: absolute;
    top: 0;
    right: 0;
    li {
      padding: 1rem;
      a {
        font-size: 60%;
      }
    }
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
    header {
      font-size: 105%;
      div {
        display: block;
      }
      h3 {
        line-height: 1.4rem;
      }
    }
    section {
      a {
        padding: 0rem;
      }
      h3 {
        font-size: 130%;
      }
      p {
        line-height: 1.8rem;
        font-size: 90%;
      }
      ul {
        font-size: 74%;
      }
      ol {
        font-size: 74%;
      }
      li {
        line-height: 1.8rem;
      }
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
    <FeaturedArticleStyles
      itemScope
      itemType="http://schema.org/Article"
      className="box"
    >
      <div className="ribbon-wrapper">
        <div className="ribbon">FEATURED</div>
      </div>

      {featuredImage}
      <header>
        <h3>
          <Link to={`/blog${post.fields.slug}`} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h3>
        <time dateTime={post.frontmatter.date} itemProp="datePublished">
          Written on {post.frontmatter.date}
        </time>
        <ul className="category-list">
          {post.frontmatter.tags?.map(tag => (
            <li className="mark" key={`${post.id}-${tag}`}>
              <Link to={`/blog/tag/${tag.toLowerCase()}`}>
                <FaTag /> {tag}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </section>
    </FeaturedArticleStyles>
  )
}
