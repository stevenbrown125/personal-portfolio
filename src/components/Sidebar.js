import React from "react"
import styled from "styled-components"
import Categories from "./Categories"
import LastestBlogPosts from "./LatestBlogPosts"
import LatestProjects from "./LatestProjects"
import ProjectTags from "./ProjectTags"
import PostTags from "./PostTags"

const SidebarStyles = styled.div`
  .sidebar p {
    font-size: 90%;
  }
  .sidebar ul {
    padding: 0 0.8rem;
  }
  article h3 {
    font-size: 120%;
  }
  p {
    text-indent: 1rem;
  }
  h2 {
    text-align: center;
    padding: 0.8rem;
    display: block;
  }
  article time {
    font-size: 70%;
  }
  ul {
    margin-block-start: 0.2rem;
    padding: 1rem 1.4rem 1.4rem;
    list-style-type: none;
    font-size: 110%;
    li {
      padding: 0.6rem;
    }
  }
  .categories {
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
              <div className="box sidebar" key="sidebar-categories">
                <Categories />
              </div>
            )

          case "latest-project":
            return (
              <div className="sidebar">
                <LatestProjects />
              </div>
            )
          case "tags-project":
            return (
              <div className="box sidebar" key="sidebar-tags-project">
                <ProjectTags type="post" />
              </div>
            )
          case "tags-post":
            return (
              <div className="box sidebar" key="sidebar-tags-post">
                <PostTags type="post" />
              </div>
            )
          default:
            return (
              <div className="box sidebar" key="sidebar-recent-blog-posts">
                <LastestBlogPosts />
              </div>
            )
        }
      })}
    </SidebarStyles>
  )
}
