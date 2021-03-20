import styled from "styled-components"

const ItemListStyles = styled.ul`
  margin-block-start: 0.2rem;
  padding: 1rem 2rem;
  list-style-type: none;
  li {
    list-style-type: none;
    padding: 0.6rem;
    article {
      border-bottom: 1px solid var(--grey);
    }
  }

  li:last-child article {
    border-bottom: none;
  }
`

export default ItemListStyles
