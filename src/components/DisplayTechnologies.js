import React from "react"
import { Link } from "gatsby"
import ItemListStyles from "../styles/ItemListStyles"

export default function DisplayTechnologies(data) {
  return (
    <ItemListStyles>
      {data.map(tech => (
        <li key={`tech-${tech}`}>
          <Link to={`/portfolio/technology/${tech.toLowerCase()}`}>{tech}</Link>
        </li>
      ))}
    </ItemListStyles>
  )
}
