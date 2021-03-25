import React from "react"
import { Link } from "gatsby"
import TaxonomyList from "./TaxonomyList"
import BlogListingItemStyles from "../styles/BlogListingItemStyles"

export default function ListingsBlogItem({ post }) {
  const title = post.frontmatter.title || post.fields.slug

  return (
    <BlogListingItemStyles itemScope itemType="http://schema.org/Article">
      <header>
        <h3 itemProp="headline">
          <Link to={`/blog${post.fields.slug}`} itemProp="url">
            {title}
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
      <TaxonomyList list={post.frontmatter.tags} type="tag" />
    </BlogListingItemStyles>
  )
}
