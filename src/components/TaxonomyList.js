/* eslint-disable multiline-ternary */
import React from "react"
import { Link } from "gatsby"
import { FaFileCode, FaLayerGroup, FaTag } from "react-icons/fa"
import styled from "styled-components"

const TaxonomyListStyles = styled.section`
  padding: 0.5rem;
  font-size: 65%;
  ul {
    display: inline-block;
    padding: 1rem 1rem;
    li {
      margin: 0.4rem 0.4rem;
      padding: 0.5rem 1rem;
      a {
        text-decoration: none;
      }
    }
    li:hover {
      background: var(--orange);
      a {
        color: var(--black);
      }
    }
  }

  @media only screen and (max-width: 800px) {
    font-size: 100%;
  }
`

export default function TaxonomyList({ list, type }) {
  const icon =
    type === "tag" ? (
      <FaTag />
    ) : type === "categories" ? (
      <FaLayerGroup />
    ) : (
      <FaFileCode />
    )
  const section = type === "technology" ? "portfolio" : "blog"

  return (
    <TaxonomyListStyles itemProp="keywords">
      <ul className="taxonomy-list">
        {list?.map(taxonomy => (
          <li className="mark" key={`${taxonomy}`}>
            <Link to={`/${section}/${type}/${taxonomy.toLowerCase()}`}>
              {icon} {taxonomy}
            </Link>
          </li>
        ))}
      </ul>
    </TaxonomyListStyles>
  )
}
