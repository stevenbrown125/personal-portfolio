import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

const PaginationStyles = styled.form`
  float: right;
  font-size: 60%;
  padding-top: 0.5rem;
  fieldset {
    border: none;
    padding: 0;
    input,
    select {
      margin: 0 0 0 1rem;
    }
  }
  @media only screen and (max-width: 800px) {
    padding-top: 0.3rem !important;
    fieldset {
      font-size: 110%;
      label span.jump-to {
        display: none;
      }
    }
  }
`

export default function Pagination({ pageContext, location }) {
  const [page, setPage] = useState(pageContext.currentPage)
  const pathBase =
    pageContext.currentPage !== 1
      ? location.pathname.split("/").slice(0, -2).join("/")
      : location.pathname
  return (
    <PaginationStyles
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
    </PaginationStyles>
  )
}
