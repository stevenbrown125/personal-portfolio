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
        div {
          max-height: 400px;
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

    ul,
    ol {
      li {
        font-size: 115%;
        line-height: 2.8rem;
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

    span.pagination {
      fieldset {
        label span.jump-to {
          display: none;
        }
      }
    }
  }
`
export default BlogPageStyles
