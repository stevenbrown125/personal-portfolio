import React from "react"
import ItemListStyles from "../styles/ItemListStyles"
import ListingsBlogItem from "./ListingsBlogItem"

export default function ListingsBlog({ posts }) {
  return (
    <ItemListStyles>
      {posts.map(post => {
        return (
          <li key={`post-${post.id}`}>
            <ListingsBlogItem post={post} />
          </li>
        )
      })}
    </ItemListStyles>
  )
}
