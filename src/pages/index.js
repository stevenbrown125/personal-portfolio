import React from "react"
import SEO from "../components/Seo"
import styled from "styled-components"
import { Link } from "gatsby"

const HomePageStyles = styled.div`
  min-width: var(--minWidth);
  h1 {
    padding: 1rem;
    background: var(--white);
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0.3px 0.3px 6px 1px rgba(0.5, 0.5, 0.5, 0.4);
    z-index: 0;
    border-radius: 0.4rem;
  }
  h2 {
    margin-top: -0.3rem;
    transform: rotate(-0.9deg);
    margin-bottom: 2rem;
    border-radius: 1rem;
  }
`

export default function HomePage() {
  return (
    <HomePageStyles>
      <SEO
        title="Homepage"
        description="A website and blog displaying Steven's projects and interests. I design and develop things using  React and NodeJS!"
      />
      <div className="container">
        <h1 className="center">
          <span role="img" aria-label="hand-wave">
            👋
          </span>{" "}
          Hey, I'm Steven Brown
        </h1>
        <h2 className="center">
          <span className="mark">
            I'm here to help bring your ideas to the web!
          </span>
        </h2>
        <div className="box content">
          <p>
            I'm a Full Stack Javascript developer from the US{" "}
            <span role="img" aria-label="american-flag">
              🇺🇸
            </span>
            . Web Design &amp; Development is my passion and I love working with
            Javascript. I usually code using ReactJS and NodeJS while utilizing
            the NextJS or GatsbyJS Frameworks. My goal throughout this next year
            is to build on my current knowledge of TypeScript and working with
            the GraphQL API. I also enjoy studying Russian{" "}
            <span role="img" aria-label="russian-flag">
              🇷🇺
            </span>{" "}
            and am developing applications for language acquisition. To do this,
            I dive into the world of neuroscience and attempt to find ways to
            increase productivity in processes. Oh, and I love to travel and
            write so check out my blog to see some of my latest adventures!
          </p>
          <p>
            I believe in being part of something bigger than myself so let me
            work for you. If you are interested in my professional skills, take
            a gander at my <Link to="/portfolio">porfolio</Link>!
          </p>

          <p>
            I built this site with{" "}
            <span role="img" aria-label="heart">
              💛
            </span>{" "}
            using GatsbyJS, Markdown, GraphQL, and Styled Components. It is
            meant to serve as a place to display all my works and as a
            playground as I explore GatsbyJS and GraphQL in more depth. I hope
            you like it!
          </p>
        </div>
      </div>
    </HomePageStyles>
  )
}
