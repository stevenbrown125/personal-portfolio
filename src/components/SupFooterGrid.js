import React from "react"
import styled from "styled-components"
import LastestBlogPosts from "./LatestBlogPosts"
import LatestProjects from "./LatestProjects"
import TwitterFeed from "./TwitterFeed"

const SubGridStyles = styled.div`
  min-width: var(--minWidth);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & > div {
    display: grid-item;
    padding: 1rem 3rem;
    box-shadow: none;
  }
  article h3 {
    font-size: 120%;
  }
  .categories {
    display: none;
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export default function SupFooterGrid() {
  return (
    <SubGridStyles>
      <TwitterFeed />
      <LastestBlogPosts />
      <LatestProjects />
    </SubGridStyles>
  )
}
