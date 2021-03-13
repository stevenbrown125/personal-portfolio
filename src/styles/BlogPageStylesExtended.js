import styled from "styled-components"
import BlogPageStyles from "./BlogPageStyles"

const BlogPageStylesExtended = styled(BlogPageStyles)`
  article ul li,
  article ol li {
    padding: 1rem 0rem;
    line-height: 2.8rem;
  }
  article ul,
  article ol {
    font-size: 118%;
  }
  .blog-header {
    margin-bottom: 2rem;
    p {
      padding: 0 4rem 0rem;
      display: inline-block;
    }
    .category-list {
      display: inline;
      text-align: right;
      p {
        padding: 0 1rem;
      }
      ul {
        display: inline;
        list-style-type: none;
        padding-inline-start: 0;
        font-size: 80%;
        font-style: italic;
        text-align: right;
        margin-bottom: 2rem;
        display: inline;
      }
      li {
        display: inline;
        padding: 0 0.8rem;
        margin: 0 0.4rem;
      }
      li:hover {
        background: var(--grey);
      }
      a {
        text-decoration: none;
      }
    }
  }

  section {
    padding: 1rem;
  }

  figure {
    margin: 1rem 0 2.4rem;
  }
  figcaption {
    margin: 1rem;
    font-style: italic;
  }
`
export default BlogPageStylesExtended
