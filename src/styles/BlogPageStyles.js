import styled from "styled-components"

const BlogPageStyles = styled.div`
  display: grid;
  grid-template-columns: 25rem auto;
  grid-gap: 2rem;
  .content article {
    padding-bottom: 1rem;
    margin-bottom: 2rem;
  }
  .content li:last-child article {
    border-bottom: none;
  }
  @media only screen and (max-width: 800px) {
    .sidebar {
      display: none;
    }
    grid-template-columns: auto;
  }
`
export default BlogPageStyles
