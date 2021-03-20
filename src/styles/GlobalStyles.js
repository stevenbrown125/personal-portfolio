import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #fbbc04;
    --white: #fff;
    --grey: #d0d0c9;
    --blue: #3972bd;
    --orange: #f0842c;
    --lightblue: #459ccf;
    --lightgrey: #efefef;
    --red: #e95f47;
    --darkred: #bb3720;
    --offWhite: #fdfdfd;
    --minWidth: 550px;
    --bs: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
    --gtc: 25rem auto;
    --primary: var(--red);
    --secondary: var(--darkred);
  }
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.8rem;
    background: var(--lightgrey);
  }

  pre, code, blockquote {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
    max-width: 800px;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--grey) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--grey) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  svg {
    margin: auto;
    display: inline-flex;
    align-self: center;
    top: 0.125em;
    position: relative;
  }

  img {
    max-width: 100%;
  }

  div.container {
    padding: clamp(5px, 1vw, 25px);
    margin: 0 auto;
  }

  .box {
      border-radius: 0.4rem;
      background: rgba(255, 255, 255, 0.85);
      box-shadow: var(--bs);
  }

  .content {
      padding: 0.5rem 3rem;
      margin-bottom: 1rem;
    p {
      text-indent: 3rem;
      font-size: 2.1rem;
      line-height: 2.9rem;
    }
  }
  .single-column {
    grid-template-columns: auto;
  }
  .two-columns {
    grid-template-columns: 25rem auto;
  }
`

export default GlobalStyles
