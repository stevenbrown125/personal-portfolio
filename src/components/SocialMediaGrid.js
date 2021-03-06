import React from "react"
import styled from "styled-components"
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa"

const SocialMediaGridStyles = styled.div`
  background: var(--black);
  color: var(--white);
  text-align: center;
  font-size: 150%;
  padding: 1rem;
  box-shadow: var(--bs);
  a {
    color: var(--white);
    padding: 2rem;
  }
  a.twitter:hover {
    color: var(--lightblue);
  }
  a.linkedin:hover {
    color: var(--blue);
  }
  a.github:hover {
    color: var(--orange);
  }

  @media only screen and (max-width: 800px) {
    font-size: 90%;
  }
`

export default function SocialMediaGrid() {
  return (
    <SocialMediaGridStyles>
      <h3>
        Let's Connect{" "}
        <span>
          <a
            href="https://twitter.com/Design4TheWeb"
            target="_blank"
            className="twitter"
            rel="noreferrer"
          >
            <FaTwitter></FaTwitter>
          </a>
          <a
            href="https://www.linkedin.com/in/stevenbrown125/"
            target="_blank"
            className="linkedin"
            rel="noreferrer"
          >
            <FaLinkedinIn></FaLinkedinIn>
          </a>
          <a
            href="https://github.com/stevenbrown125"
            target="_blank"
            className="github"
            rel="noreferrer"
          >
            <FaGithub></FaGithub>
          </a>
        </span>
      </h3>
    </SocialMediaGridStyles>
  )
}
