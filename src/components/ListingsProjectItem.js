import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FaTag } from "react-icons/fa"
import BlogPageStyles from "../styles/BlogPageStyles"

export default function ListingsProjectItem({ project }) {
  const title = project.frontmatter.title || project.fields.slug
  return (
    <BlogPageStyles>
      <article
        className="project-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <figure>
            <GatsbyImage
              image={
                project.frontmatter.featuredImage?.childImageSharp
                  .gatsbyImageData
              }
              className="featured-image"
              alt={project.frontmatter.title}
            />
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
        <section className="category-list" itemProp="keywords">
          <ul>
            {project.frontmatter.tags?.map(tag => (
              <li className="mark" key={`${project.id}-${tag}`}>
                <Link to={`/project/tag/${tag.toLowerCase()}`}>
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
