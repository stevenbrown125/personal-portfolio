import React from "react"
import { Link } from "gatsby"

export default function DisplayCategories(data) {
  return (
    <ul>
      {data.map(category => (
        <li key={`${category}-sidebar`}>
          <Link to={`/blog/category/${category.toLowerCase()}`}>
            {category}
          </Link>
        </li>
      ))}
    </ul>
  )
}
