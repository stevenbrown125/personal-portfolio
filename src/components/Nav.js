import React, { useState } from "react"
import styled from "styled-components"
import Logo from "./Logo"
import NavbarLinks from "./NavbarLinks"

const NavStyles = styled.nav`
  display: flex;
  background-color: var(--offWhite);
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 2;
  align-self: center;
  border-bottom: 0.1rem solid var(--grey);
  box-shadow: var(--bs);
  font-size: 145%;
  min-height: 10rem;
  @media (max-width: 768px) {
    position: sticky;
    min-height: 9rem;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    .logoWrap:first-child {
      position: absolute;
      left: 4rem;
    }
    justify-content: flex-end;
  }
  @media (max-width: 390px) {
    min-height: 6rem;
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    background-color: var(--offWhite);
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: var(--black);
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: var(--black);
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Nav = ({ location }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  let navBox = (
    <Navbox>
      <NavbarLinks
        location={location}
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
    </Navbox>
  )
  if (!navbarOpen) {
    navBox = (
      <Navbox open>
        <NavbarLinks
          location={location}
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
        />
      </Navbox>
    )
  }

  return (
    <NavStyles>
      {!navbarOpen ? <Logo /> : ""}
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navBox}
    </NavStyles>
  )
}

export default Nav
