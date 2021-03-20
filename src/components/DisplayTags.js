import React from "react"
import { Link } from "gatsby"
import ItemListStyles from "../styles/ItemListStyles"

export default function DisplayTags(data, type) {
  return (
    <ItemListStyles>
      {data.map(tag => (
        <li key={`tag-${tag}`}>
          <Link
            to={`/${
              type === "post" ? "blog" : "project"
            }/tag/${tag.toLowerCase()}`}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ItemListStyles>
  )
}
