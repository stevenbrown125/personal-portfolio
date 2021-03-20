import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PaginationStyles = styled.ul`
  padding-bottom: 1.8rem;
  li {
    display: inline;
    padding: 0 1rem;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: var(--primary);
  }
  .currentPage {
    font-size: 140%;
  }
  .currentPage a {
    pointer-events: none;
    cursor: default;
    color: black;
  }
  .heading {
    font-style: italic;
  }
`

export default function Pagination({ pageContext, location }) {
  let pathBase = location.pathname
  if (pageContext.currentPage !== 1) {
    pathBase = location.pathname.split("/").slice(0, -1).join("/")
  }
  return (
    <PaginationStyles>
      <li className="heading">Jump to Page:</li>
      {Array.from({ length: pageContext.numPages }).map((_, i) => {
        i++
        const currentClass = i === pageContext.currentPage ? "currentPage" : ""
        return (
          <li key={`pagination-${i}`} className={currentClass}>
            <Link to={`${pathBase}${i === 1 ? "" : `/${i}`}`}>[ {i} ]</Link>
          </li>
        )
      })}
    </PaginationStyles>
  )
}
