import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PaginationStyles = styled.ul`
  list-style-type: none;
  padding-bottom: 1.8rem;
  li {
    display: inline;
    padding: 0 1rem;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: var(--blue);
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

export default function Pagination({ totalItems, location }) {
  const itemsPerPage = parseInt(3)
  const numPages = Math.ceil(totalItems / itemsPerPage)

  const currentPage = !Number.isInteger(
    parseInt(
      location.pathname.split("/")[location.pathname.split("/").length - 1]
    )
  )
    ? 1
    : parseInt(
        location.pathname.split("/")[location.pathname.split("/").length - 1]
      )
  const pathBase = Number.isInteger(
    parseInt(
      location.pathname.split("/")[location.pathname.split("/").length - 1]
    )
  )
    ? location.pathname.split("/").slice(0, -1).join("/")
    : location.pathname

  if (numPages === 1) {
    return ``
  }
  return (
    <PaginationStyles>
      <li className="heading">Jump to Page:</li>
      {Array.from({ length: numPages }).map((_, i) => {
        i++
        const currentClass = i === currentPage ? `currentPage` : ``
        return (
          <li key={`pagination-${i}`} className={currentClass}>
            <Link to={`${pathBase}${i === 1 ? `` : `/${i}`}`}>[ {i} ]</Link>
          </li>
        )
      })}
    </PaginationStyles>
  )
}
