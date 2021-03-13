import React from "react"
import ItemStyles from "../styles/ItemStyles"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FaTag } from "react-icons/fa"

export default function ListingsProject({ projects }) {
  return (
    <ItemStyles>
      {projects.map(project => {
        const title = project.frontmatter.title || project.fields.lug
        return (
          <li key={project.fields.slug}>
            <article
              className="project-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <Img
                  fluid={
                    project.frontmatter.featuredImage?.childImageSharp.fluid
                  }
                  className="featured-image"
                />
                <h3>
                  <Link to={`/project${project.fields.slug}`} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h3>

                <time
                  dateTime={project.frontmatter.date}
                  itemProp="datePublished"
                >
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
              <section className="categories" itemProp="keywords">
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
          </li>
        )
      })}
    </ItemStyles>
  )
}
