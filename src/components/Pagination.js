import React, { useState } from "react"
import { navigate } from "gatsby"
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
  const [page, setPage] = useState(pageContext.currentPage)
  const pathBase =
    pageContext.currentPage !== 1
      ? location.pathname.split("/").slice(0, -2).join("/")
      : location.pathname

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (page !== pageContext.currentPage) {
          page === 1
            ? navigate(`${pathBase}`)
            : navigate(`${pathBase}/${page}/`)
        }
      }}
    >
      <fieldset>
        <label htmlFor="page">
          <span className="jump-to">Jump to </span>Page:
        </label>
        <select
          id="page"
          name="page"
          onChange={e => setPage(e.target.options.selectedIndex + 1)}
          defaultValue={pageContext.currentPage}
        >
          {Array.from({ length: pageContext.numPages }).map((_, i) => {
            i++
            return (
              <option value={i} key={i}>
                {i}
              </option>
            )
          })}
        </select>
        <input type="submit" value="Go" />
      </fieldset>
    </form>
  )
}
