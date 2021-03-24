import styled from "styled-components"

const BlogListingStyles = styled.div`
  article {
    margin-bottom: 0;
    h3,
    time,
    p {
      padding: 0 2rem;
    }
    header {
      h1 {
        display: block;
        text-indent: 1rem;
        font-size: 165%;
        padding: 1rem;
        margin-bottom: 1.4rem;
      }
    }
    ul.article-listings {
      margin-block-start: 0.2rem;
      padding: 1rem 0rem 0 0;
      list-style-type: none;
      li.article-listing {
        padding: 0.6rem;
        article {
          border-bottom: 1px solid var(--grey);
          padding-bottom: 1rem;
        }
      }
      li.article-listing:last-child article {
        border-bottom: none;
      }
    }
    section {
      margin-bottom: 1rem;
      figure {
        figcaption {
          font-style: italic;
          text-align: right;
          padding: 0.4rem 0.8rem;
          font-size: 70%;
        }
        div {
          -moz-box-shadow: var(--bs);
          -webkit-box-shadow: var(--bs);
          box-shadow: var(--bs);
          height: 400px;
        }
      }
      div {
        word-break: break-word;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: auto;
    article header {
      font-size: 105%;
      h1 {
        font-size: 110%;
        line-height: 1.8rem;
      }
    }
  }
`

export default BlogListingStyles
