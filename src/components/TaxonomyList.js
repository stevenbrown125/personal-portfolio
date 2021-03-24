import React from "react"
import { Link } from "gatsby"
import { FaLayerGroup, FaTag } from "react-icons/fa"
import styled from "styled-components"

const TaxonomyListStyles = styled.section`
  padding: 0.5rem;
  font-size: 65%;
  ul {
    display: inline-block;
    padding: 0 1rem;
    list-style-type: none;
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
  const icon = type === "tag" ? <FaTag /> : <FaLayerGroup />
  console.log(list + type)
  return (
    <TaxonomyListStyles itemProp="keywords">
      <ul className="taxonomy-list">
        {list?.map(taxonomy => (
          <li className="mark" key={`${taxonomy}`}>
            <Link to={`/blog/${type}/${taxonomy.toLowerCase()}`}>
              {icon} {taxonomy}
            </Link>
          </li>
        ))}
      </ul>
    </TaxonomyListStyles>
  )
}
