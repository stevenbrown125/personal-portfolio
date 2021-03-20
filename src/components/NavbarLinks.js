import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./Logo"

const NavItem = styled(Link)`
  text-decoration: none;
  color: var(--black);
  white-space: nowrap;
  margin: 0 4vw;
  transition: all 200ms ease-in;
  position: relative;
  &[aria-current="page"] {
    color: var(--primary);
    &:hover {
      text-decoration: none;
      ::after {
        width: 0%;
      }
    }
  }
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: var(--primary);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: var(--primary);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  const blogActive = location.pathname.includes("blog") ? "page" : ""
  const portfolioActive =
    location.pathname.includes("project") ||
    location.pathname.includes("portfolio")
      ? "page"
      : ""
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem aria-current={portfolioActive} to="/portfolio">
        Portfolio
      </NavItem>
      <Logo />
      <NavItem aria-current={blogActive} to="/blog">
        Blog
      </NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </>
  )
}

export default NavbarLinks
