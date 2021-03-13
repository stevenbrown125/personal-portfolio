import React from "react"
import { Link } from "gatsby"

export default function DisplayTags(data, type) {
  return (
    <ul>
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
    </ul>
  )
}
