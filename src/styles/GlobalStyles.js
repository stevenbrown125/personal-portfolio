import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #d0d0c9;
    --blue: #3972bd;
    --orange: #f0842c;
    --lightblue: #459ccf;
    --lightgrey: #efefef;
    --minWidth: 550px;
  }
  html {
    font-size: 10px;

  }
  body {
    font-size: 1.8rem;
    background: var(--lightgrey);
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
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
    scrollbar-color: var(--blue) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;

    background-size: 1500px;
  }
  svg {
    margin: auto;
    display: inline-flex;
    align-self: center;
    top: 0.125em;
    position: relative;

    padding-right: 1rem;
  }
  img {
    max-width: 100%;
  }

  div.container {
    padding: clamp(5px, 1vw, 25px);
    max-width: 1200px;
    margin: 0 auto;
    
  }


  div.box {
      border-radius: 0.4rem;
      background: var(--white);
      background: rgba(255, 255, 255, 0.85);
      box-shadow: 0.3px 0.3px 6px 1px rgba(0.5, 0.5, 0.5, 0.4);
  }
  div.content {
      padding: 0.5rem 3rem;
      margin-bottom: 1rem;
    p {
      text-indent: 3rem;
      font-size: 2.1rem;
      line-height: 2.9rem;
    }
  }

  h1.title-section {
    margin-bottom: 1rem;
    padding: 1rem;
    display: block;
    text-indent: 1rem;
    font-size: 165%;
    width: 98%;
    box-shadow: 0.3px 0.3px 6px 1px rgba(0.5, 0.5, 0.5, 0.4);
  }
  .blog-header {
    p {
      padding: 0 4rem 1rem;
    }
  }
  .featured-image {
    margin: 1rem 0 2.4rem;
    border: solid 1px #ccc;
    -moz-box-shadow: 1px 1px 5px #999;
    -webkit-box-shadow: 1px 1px 5px #999;
    box-shadow: 1px 1px 5px #999;
    border: solid 1px #efefef;
  }
  
`

export default GlobalStyles
