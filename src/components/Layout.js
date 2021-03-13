import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"

import Nav from "./Nav"
import bg from "../assets/images/homepage.png"
import garda from "../assets/images/garda.png"
import campaignia from "../assets/images/campaignia.png"
import sweden from "../assets/images/sweden.png"
import pompei from "../assets/images/pompei.png"
import SocialMediaGrid from "./SocialMediaGrid"
import SupFooterGrid from "./SupFooterGrid"
import Footer from "./Footer"

const SiteBorderStyles = styled.div`
  min-width: var(--minWidth);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  background: url(${bg}) no-repeat center top;
  &.blog {
    background-image: url(${campaignia});
  }
  &.portfolio,
  &.project {
    background-image: url(${garda});
  }
  &.about {
    background-image: url(${sweden});
  }
  &.contact {
    background-image: url(${pompei});
  }
`

const ContentStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 3px;
  padding: 2rem;
  @media only screen and (max-width: 800px) {
    padding: 0;
  }
`

const Layout = ({ location, title, children }) => {
  const pathname = location.pathname.split("/")
  //console.log(pathname[1].replace(/\//g, ""))
  //const isRootPath = location.pathname === rootPath
  const bgimage = pathname[1] ? pathname[1].replace(/\//g, "") : ``

  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles className={bgimage}>
        <Nav location={location} />
        <ContentStyles>
          <main>{children}</main>
        </ContentStyles>
        <SocialMediaGrid />
      </SiteBorderStyles>
      <SupFooterGrid />
      <Footer />
    </>
  )
}

export default Layout

/*
import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout*/
