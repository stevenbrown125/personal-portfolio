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
import { Helmet } from "react-helmet"

import { withPrefix } from "gatsby"
const SiteBorderStyles = styled.div`
  background: url(${bg}) no-repeat center top;
  background-size: auto;
  // some day I will figure out a better way to do this
  // today isn't that day
  // tomorrow isn't looking good either
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
    font-size: 80%;
  }
`

const Layout = ({ location, children }) => {
  const pathname = location.pathname.split("/")
  const bgimage = pathname[1] ? pathname[1].replace(/\//g, "") : ""

  return (
    <>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4QCZHL7SRC"
        ></script>
        <script
          async
          src={withPrefix("js/google-analytics.js")}
          type="text/javascript"
        ></script>
      </Helmet>
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
