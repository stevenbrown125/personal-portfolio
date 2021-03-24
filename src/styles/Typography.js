import { createGlobalStyle } from "styled-components"

const Typography = createGlobalStyle`

  html {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: lighter;
    margin: 0;
  }
  h2, h3 {
    font-weight: normal;
  }
  h1 {
    font-weight: bold;
  }

  a {
    color: var(--black);
    text-decoration-color: var(--primary);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    &:hover {
    color: var(--primary);
    }
  }

  mark, .mark {
    background: var(--yellow);
    padding: 0.6rem 2.6rem;
    display: inline-block;
    line-height: 1;
    border-radius: 4px;
    box-shadow: var(--bs);
    border-radius: 0.4rem;
  }
`

export default Typography
