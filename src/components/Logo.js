import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

const LogoWrap = styled.div`
  width: 225px;
  margin: 0 2rem;
  &:first-child {
    display: none;
  }
  @media (max-width: 768px) {
    order: -1;
    width: 135px;
    margin: 0 auto;
    text-align: left;

    &:first-child {
      display: block;
    }
  }
`

const Logo = ({ navbarOpen, setNavbarOpen }) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }, extension: { eq: "png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <LogoWrap
      as={Link}
      to="/"
      className="logoWrap"
      onClick={() => setNavbarOpen(!navbarOpen)}
    >
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="Steven Brown's FullStack Development Portfolio Logo"
      />
    </LogoWrap>
  )
}

export default Logo
