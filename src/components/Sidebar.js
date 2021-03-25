import React from "react"
import styled from "styled-components"
import Categories from "./Categories"
import LastestBlogPosts from "./LatestBlogPosts"
import LatestProjects from "./LatestProjects"
import ProjectTags from "./ProjectTags"
import PostTags from "./PostTags"

const SidebarStyles = styled.div`
  div {
    margin-bottom: 2rem;
  }
  article {
    margin-bottom: 2rem;
    h3 {
      font-size: 120%;
    }
    p {
      text-indent: 1rem;
      font-size: 90%;
    }
    time {
      display: none;
    }
  }
  h2 {
    text-align: center;
    padding: 0.8rem;
    display: block;
  }
  .categories {
    display: none;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`

export default function Sidebar({ args }) {
  return (
    <SidebarStyles>
      {args.map(arg => {
        switch (arg) {
          case "categories":
            return (
              <div className="box sidebar" key="categories">
                <Categories />
              </div>
            )

          case "latest-project":
            return (
              <div className="box sidebar" key="latest-project">
                <LatestProjects />
              </div>
            )
          case "tags-project":
            return (
              <div className="box sidebar" key="tags-project">
                <ProjectTags type="post" />
              </div>
            )
          case "tags-post":
            return (
              <div className="box sidebar" key="tags-post">
                <PostTags type="post" />
              </div>
            )
          default:
            return (
              <div className="box sidebar" key="latest-blog-posts">
                <LastestBlogPosts />
              </div>
            )
        }
      })}
    </SidebarStyles>
  )
}
