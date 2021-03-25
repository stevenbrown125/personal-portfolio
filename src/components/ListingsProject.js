import React from "react"
import ListingsProjectItem from "./ListingsProjectItem"

export default function ListingsProject({ projects }) {
  return (
    <ul className="article-listings">
      {projects.map(project => {
        return (
          <li key={project.fields.slug}>
            <ListingsProjectItem project={project} />
          </li>
        )
      })}
    </ul>
  )
}
