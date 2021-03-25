import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ArticleNavigationStyles = styled.section`
  padding: 1rem 3rem 3rem;
  h2 {
    text-align: center;
    padding: 1rem;
  }
  nav {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      list-style-type: none;
      padding: 0;
      li {
        max-width: 30rem;
      }
    }
  }
`

export default function ArticleNavigation({ previous, next, type = "blog" }) {
  return (
    <ArticleNavigationStyles className="blog-post-nav box content">
      <h2>Looking for more?</h2>
      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={`/${type}${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${type}${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </ArticleNavigationStyles>
  )
}
