import React from "react"
import styled from "styled-components"
import LastestBlogPosts from "./LatestBlogPosts"
import LatestProjects from "./LatestProjects"
import TwitterFeed from "./TwitterFeed"

const SubGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & > div {
    display: grid-item;
    padding: 0rem 3rem;
  }
  article {
    margin-bottom: 1rem;
    h3 {
      font-size: 120%;
    }
    .categories {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: auto;
    div {
      padding: 0;
    }

    h2 {
      margin: 0;
      font-size: 110%;
      display: block;
    }
    p {
      padding: 1rem;
      font-size: 90%;
    }
    article {
      h3 {
        font-size: 100%;
      }
      p {
        font-size: 90%;
      }
    }
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
