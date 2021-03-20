import React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  background: var(--black);
  margin: 0 auto;
  text-align: center;
  color: var(--white);
  padding: 2rem;
  border-top: 1px solid var(--black);

  @media only screen and (max-width: 800px) {
    font-size: 65%;
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      Copyright &copy; {new Date().getFullYear()} Steven Brown. All Rights
      Reserved.{" "}
    </FooterStyles>
  )
}
