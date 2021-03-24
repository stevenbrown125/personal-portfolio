import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"

const BioStyles = styled.div`
  padding: 2rem;
  margin-top: 2rem;
  text-align: center;
  img {
    border-radius: 50%;
  }
  p {
    width: 85%;
    margin: 1.2rem auto;
  }
  .social-icons {
    text-align: center;
    font-size: 2.8rem;
  }
  .twitter {
    color: var(--lightblue);
  }
  .linkedin {
    color: var(--blue);
  }
  .github {
    color: var(--orange);
  }
  .social-icons svg {
    transition: transform 0.2s ease-in-out;
  }
  .social-icons svg:hover {
    transform: scale(1.2);
  }

  @media only screen and (max-width: 800px) {
    p {
      font-size: 115%;
      line-height: 1.8rem;
    }
  }
`
export default function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 95, height: 95, placeholder: BLURRED)
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <BioStyles className="box">
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author?.name || ""}
      />
      <h2>{author.name}</h2>
      <h3 className="social-icons">
        <span>
          <a
            href="https://twitter.com/Design4TheWeb"
            target="_blank"
            className="twitter"
            rel="noreferrer"
          >
            <FaTwitterSquare></FaTwitterSquare>
          </a>
          <a
            href="https://www.linkedin.com/in/stevenbrown125/"
            target="_blank"
            className="linkedin"
            rel="noreferrer"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://github.com/stevenbrown125"
            target="_blank"
            className="github"
            rel="noreferrer"
          >
            <FaGithubSquare></FaGithubSquare>
          </a>
        </span>
      </h3>
      <p>{author?.summary || null}</p>
      <p>
        Follow me on Twitter{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://twitter.com/${social?.twitter || ""}`}
        >
          {social?.twitter ? `@${social?.twitter}` : ""}
        </a>
      </p>
    </BioStyles>
  )
}
