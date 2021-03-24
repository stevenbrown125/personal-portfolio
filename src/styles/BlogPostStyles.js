import styled from "styled-components"

const BlogPostStyles = styled.article`
  margin-bottom: 0;
  position: relative;
  header {
    position: relative;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--red);
    text-align: center;
    -moz-box-shadow: var(--bs);
    -webkit-box-shadow: var(--bs);
    box-shadow: var(--bs);
    h1 {
      display: block;
      text-align: center;
      padding: 0.8rem 1rem 0 1rem;
      font-size: 165%;
    }
    figure {
      margin-block-start: 0;
      margin-inline-end: 0;
      margin-inline-start: 0;
      figcaption {
        font-style: italic;
        text-align: right;
        padding: 0.4rem 0.8rem;
        font-size: 70%;
      }
      div {
        max-height: 400px;
      }
    }
    time {
      font-size: 80%;
    }
  }
  section {
    margin-bottom: 1rem;
    div {
      padding: 0 1rem;
      p {
        text-indent: 2rem;
      }
      ul,
      ol {
        li {
          padding: 0.8rem;
        }
      }
    }
  }
  h3,
  time,
  p {
    padding: 0 2rem;
  }
  ul.taxonomy-list {
    position: absolute;
    top: 0;
    right: 1rem;
    z-index: 1;
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: auto;
    ul.taxonomy-list {
      position: inherit;
      margin-block-start: 0;
      padding: inherit;
    }
  }
`
export default BlogPostStyles
