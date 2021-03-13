import styled from "styled-components"

const ItemStyles = styled.ul`
  margin-block-start: 0.1rem;
  padding: 0.8rem 1rem 0rem;
  list-style-type: none;

  h3 {
    font-size: 2.4rem;
    text-align: left;
    margin: 0.4rem 0;
  }

  time {
    padding-left: 1.4rem;
    font-size: 1.6rem;
    font-style: italic;
  }
  & > li {
    padding: 0.6rem;
    border-bottom: 1px solid var(--grey);
    header {
      margin: 0;
    }
    p {
      font-size: 100%;
      line-height: 2.2rem;
      text-indent: 2.2rem;
      margin-block-end: 0;
    }
  }
  & > li:last-child {
    border-bottom: none;
  }
  .categories {
    font-size: 80%;
    font-style: italic;
    text-align: right;
    padding: 2rem 0 0.4rem;
    margin-bottom: 0.8rem;
    ul {
      display: inline;
      list-style-type: none;
      padding-inline-start: 0;
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
`
export default ItemStyles
