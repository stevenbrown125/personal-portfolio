import styled from "styled-components"

const BlogPageStyles = styled.article`
  margin-bottom: 0;
  header {
    margin-bottom: 2rem;
    line-height: 2.8rem;
    font-size: 118%;
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
    span.pagination {
      float: right;
      font-size: 60%;
      padding-top: 0.5rem;
      fieldset {
        border: none;
        padding: 0;
        input,
        select {
          margin: 0 0 0 1rem;
        }
      }
    }
    p {
      padding: 0 2rem;
      display: inline-block;
    }
    figure {
      margin-block-start: 0;
      margin-inline-end: 0;
      margin-inline-start: 0;
    }
  }

  section {
    margin-bottom: 1rem;
    div {
      padding: 0 2rem;
    }
    figure {
        figcaption {
          font-style: italic;
          text-align: right;
          padding: 0.4rem 0.8rem;
          font-size: 70%;
        }
        div {
            max-height: 400px;
          -moz-box-shadow: var(--bs);
          -webkit-box-shadow: var(--bs);
          box-shadow: var(--bs);
        }
      }

    }
    div {
      word-break: break-all;
    }
  }
  section.blog-post-nav {
    h2 {
      text-align: center;
      padding: 1rem;
    }
    nav {
      font-size: 85%;
      font-style: italic;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style-type: none;
        padding: 0;
        li {
          max-width: 30rem;
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: auto;
    article header {
      line-height: 2.8rem;
      font-size: 105%;
      div {
        display: block;
      }
      h1 {
        font-size: 110%;
        line-height: 1.8rem;
      }
    }
    article section {
      a {
        padding: 0rem;
      }
      h2 {
        font-size: 130%;
      }
      p {
        line-height: 1.8rem;

        font-size: 90%;
      }
    }
    li {
      line-height: 1.8rem;
    }

    section.content div {
      ul,
      ol {
        font-size: 80%;
        li {
          line-height: 1.6rem;
        }
      }
    }
  }
`
export default BlogPageStyles
