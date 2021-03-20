import React from "react"
import { Link } from "gatsby"
import ItemListStyles from "../styles/ItemListStyles"

export default function DisplayCategories(data) {
  return (
    <ItemListStyles>
      {data.map(category => (
        <li key={`${category}-sidebar`}>
          <Link to={`/blog/category/${category.toLowerCase()}`}>
            {category}
          </Link>
        </li>
      ))}
    </ItemListStyles>
  )
}
