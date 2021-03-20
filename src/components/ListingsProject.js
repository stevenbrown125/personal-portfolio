import React from "react"
import ItemStyles from "../styles/ItemListStyles"
import ListingsProjectItem from "./ListingsProjectItem"

export default function ListingsProject({ projects }) {
  return (
    <ItemStyles>
      {projects.map(project => {
        return (
          <li key={project.fields.slug}>
            <ListingsProjectItem project={project} />
          </li>
        )
      })}
    </ItemStyles>
  )
}
