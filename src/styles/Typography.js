import { createGlobalStyle } from "styled-components"

import font from "../assets/fonts/Cairo-Regular.ttf"

const Typography = createGlobalStyle`
  @font-face {
    font-family: Cario-Regular;
    src: url(${font});
  }
  html {
    font-family: Cario-Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: lighter;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--blue);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: .6rem .6rem;
    display: inline-block;
    line-height: 1;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
    border-radius: .3rem;

  }

  .center {
    text-align: center;
  }


`

export default Typography
