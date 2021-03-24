import React from "react"
import ListingsBlogItem from "./ListingsBlogItem"

export default function ListingsBlog({ posts }) {
  return (
    <ul className="article-listings">
      {posts.map(post => {
        return (
          <li className="article-listing" key={`post-${post.id}`}>
            <ListingsBlogItem post={post} />
          </li>
        )
      })}
    </ul>
  )
}
