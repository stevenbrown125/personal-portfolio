import styled from "styled-components"

const BlogPageStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  article {
    margin-bottom: 0;
    header {
      margin-bottom: 2rem;
      div {
        display: flex;
        justify-content: space-between;
      }
      h1 {
        display: block;
        text-indent: 1rem;
        font-size: 165%;
        padding: 1rem;
      }
      p {
        padding: 0 2rem;
        font-size: 80%;
        display: inline-block;
      }
      figure {
        margin-block-start: 0;
        margin-inline-end: 0;
        margin-inline-start: 0;
      }
    }
    section section:nth-child(3) {
      float: right;
    }
    .category-list {
      display: inline-block;
      padding-right: 1rem;
      ul {
        display: inline;
        list-style-type: none;
        padding-inline-start: 0;
        font-size: 60%;
      }
      li {
        display: inline-block;
        padding: 0rem 0.8rem;
        margin: 0.4rem 0.4rem;
        a {
          text-decoration: none;
        }
      }
      li:hover {
        background: var(--orange);
        a {
          color: var(--black);
        }
      }
    }
    section {
      margin-bottom: 1rem;
      figure {
        margin: 1rem 0 2rem;
        border: solid 1px #ccc;
        -moz-box-shadow: 1px 1px 5px #999;
        -webkit-box-shadow: 1px 1px 5px #999;
        box-shadow: 1px 1px 5px #999;
        border: solid 1px #efefef;
        figcaption {
          margin: 0rem;
          font-style: italic;
          text-align: center;
          padding: 1rem 0;
          font-size: 80%;
        }
      }
    }
    ul,
    ol {
      li {
        line-height: 2.8rem;
        font-size: 118%;
        padding: 1rem 1rem;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: auto;
    article header {
      div {
        display: block;
      }
      h1 {
        font-size: 130%;
        line-height: 2.2rem;
      }
    }
    article section {
      h2 {
        font-size: 130%;
      }
      p {
        line-height: 1.8rem;
        font-size: 90%;
      }
      ul {
        font-size: 74%;
      }
      ol {
        font-size: 74%;
      }
      li {
        line-height: 1.8rem;
      }
    }
  }
`
export default BlogPageStyles
