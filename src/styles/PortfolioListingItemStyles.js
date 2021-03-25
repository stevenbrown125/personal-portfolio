import styled from "styled-components"

const PortfolioListingItemStyles = styled.article`
  position: relative;
  z-index: 1;
  ul {
    padding: inherit;
  }
  ul.taxonomy-list {
    position: absolute;
    top: 0;
    right: 1rem;
  }
  time {
    font-size: 80%;
  }

  @media only screen and (max-width: 800px) {
    section {
      p {
        line-height: 1.8rem;
        font-size: 90%;
      }
      ul {
        font-size: 74%;
      }
      li {
        line-height: 1.8rem;
      }
    }
  }
`

export default PortfolioListingItemStyles
