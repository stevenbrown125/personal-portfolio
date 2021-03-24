import React from "react"
import SEO from "../components/Seo"
import styled from "styled-components"
import { Link } from "gatsby"

const HomePageStyles = styled.div`
  padding: 0.5rem 3rem;
  text-align: center;
  h1 {
    padding: 1rem;
  }
  h2 {
    margin-top: -0.6rem;
    transform: rotate(-0.8deg);
    margin-bottom: 2rem;
  }
  p {
    text-align: left;
  }

  @media only screen and (max-width: 800px) {
    .mark {
      padding: 0.4rem;
      font-size: 75%;
    }
    h1 {
      font-size: 140%;
    }
    p {
      font-size: 120%;
      line-height: 2rem;
    }
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
        <h1 className="box">Hey, I'm Steven Brown</h1>
        <h2>
          <span className="mark">
            I'm here to help bring your ideas to the web!
          </span>
        </h2>
        <div className="box content">
          <p>
            I'm a Full Stack Javascript developer from the US
            <span role="img" aria-label="american-flag"></span>. Web Design
            &amp; Development is my passion and I love working with Javascript.
            I usually code using ReactJS and NodeJS while utilizing the NextJS
            or GatsbyJS Frameworks. My goal throughout this next year is to
            deepen my knowledge of TypeScript and understanding of the GraphQL
            API. I also enjoy studying Russian
            <span role="img" aria-label="russian-flag"></span> and am developing
            applications for language acquisition. While doing this, I dive into
            the world of neuroscience and attempt to find ways to increase
            productivity in processes. Oh, and I love to travel and write so
            check out my blog to see some of my latest adventures!
          </p>
          <p>
            I believe in being part of something bigger than myself so let's
            work together! If you are interested in my professional skills, take
            a gander at my <Link to="/portfolio">porfolio</Link>!
          </p>
          <p>
            I built this site with{" "}
            <span role="img" aria-label="heart">
              love{" "}
            </span>
            using GatsbyJS, Markdown, GraphQL, and Styled Components. It is
            meant to serve as a place to display all my works and as a
            playground as I explore GatsbyJS and GraphQL in more depth. I built
            this site off of GatsbyJS Blog and have published it's source code
            on{" "}
            <a
              href="https://github.com/stevenbrown125/personal-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            . I hope you like it!
          </p>
        </div>
      </div>
    </HomePageStyles>
  )
}
