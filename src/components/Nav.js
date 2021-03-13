import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavStyles = styled.nav`
  margin: 0rem 0 3rem;
  padding: 3rem 0 3rem;
  background: var(--lightgrey);
  border-bottom: 0.1rem solid var(--black);
  box-shadow: 0.3px 0.3px 3px 1px rgba(0.7, 0.7, 0.7, 0.4);
  position: relative;

  ul {
    margin: 0 auto;
    max-width: 1200px;
    text-align: center;
    list-style: none;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    @media (max-width: 800px) {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 1rem;
      li {
        font-size: 110% !important;
      }
      li:nth-child(3) {
        display: none;
      }
    }

    li {
      position: relative;
      font-size: 150%;
      order: 1;
      @media (max-width: 1180px) {
      }
    }
    a {
      text-decoration: none;
      position: relative;
      z-index: 5;
      color: var(--black);
      &:hover {
        color: var(--lightblue);
      }
      &:hover::before {
        width: 0.5em;
        height: 0.5em;
        content: "";
        pointer-events: none;
        background: var(--lightblue);
        position: absolute;
        z-index: -1;
        --translate: -1.2rem;
        --rotate: -2deg;
        transform: translateX(var(--translate)) translateY(var(--translate))
          rotate(var(--rotate));
      }
      &[aria-current="page"] {
        color: var(--blue);
      }
      &[aria-current="page"]::before {
        width: 0.5em;
        height: 0.5em;
        content: "";
        pointer-events: none;
        background: var(--blue);
        position: absolute;
        z-index: -1;
        --translate: -1.2rem;
        --rotate: -2deg;
        transform: translateX(var(--translate)) translateY(var(--translate))
          rotate(var(--rotate));
      }
    }
  }
`

export default function Nav({ location }) {
  const blogActive = location.pathname.includes("blog") ? "page" : ``
  const portfolioActive =
    location.pathname.includes("project") ||
    location.pathname.includes("portfolio")
      ? "page"
      : ``

  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link aria-current={portfolioActive} to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li></li>
        <li>
          <Link aria-current={blogActive} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </NavStyles>
  )
}
