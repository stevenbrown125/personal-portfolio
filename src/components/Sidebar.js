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
  div div {
    border-radius: 0.4rem;
    border: 0;
  }
  article {
    h3 {
      padding: 0.8rem 0 0;
      font-size: 105%;
      text-align: center;
    }
    p {
      text-indent: 1rem;
      font-size: 90%;
      padding: 0;
    }
    time {
      padding-left: 1rem;
      text-align: center;
    }
    border-bottom: 1px solid var(--grey);
  }
  header,
  section {
    padding: 0 1.4rem;

    time {
      font-size: 80%;

      padding: 0;
    }
  }

  section {
    text-indent: 2rem;
    font-size: 90%;
    padding: 0 1.8rem 0.8rem;
  }
  h2 {
    padding: 0.8rem 1.4rem;
    font-size: 120%;
    display: block;
    box-shadow: var(--bs);
  }

  .taxonomy {
    display: none;
  }
  .ribbon-wrapper {
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
          case "featured-project":
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
