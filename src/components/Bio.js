import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"

const BioStyles = styled.div`
  margin-top: 2rem;
  text-align: center;
  img {
    border-radius: 50%;
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
`
export default function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80, quality: 95) {
            ...GatsbyImageSharpFixed
          }
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
  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <BioStyles className="box content">
      <Image fixed={avatar} alt={author?.name || ``} />
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
          href={`https://twitter.com/${social?.twitter || ``} `}
        >
          {social?.twitter ? `@${social?.twitter}` : ``}
        </a>
      </p>
    </BioStyles>
  )
}
