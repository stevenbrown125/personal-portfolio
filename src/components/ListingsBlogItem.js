import React from "react"
import { Link } from "gatsby"
import { FaTag } from "react-icons/fa"
import BlogPageStyles from "../styles/BlogPageStyles"

export default function ListingsBlogItem({ post }) {
  const title = post.frontmatter.title || post.fields.slug
  return (
    <BlogPageStyles>
      <article itemScope itemType="http://schema.org/Article">
        <header>
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
        <section className="category-list" itemProp="keywords">
          <ul>
            {post.frontmatter.tags?.map(tag => (
              <li className="mark" key={`${post.id}-${tag}`}>
                <Link to={`/blog/tag/${tag.toLowerCase()}`}>
                  <FaTag /> {tag}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </BlogPageStyles>
  )
}
