import React from "react"
import styled from "styled-components"
import { FaUser, FaEnvelope, FaEdit } from "react-icons/fa"
import SEO from "../components/Seo"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import PortfolioListingStyles from "../styles/PortfolioListingStyles"

const ContactPageStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  h1 {
    display: block;
  }
  figure {
    display: inline-block;
  }
  div {
    padding: 1rem;
  }
  form {
    fieldset {
      display: grid;
      gap: 0.8rem;
      border-color: rgba(0, 0, 0, 0.1);
      border-width: 1px;
      padding-block-start: 0;
    }
    .mapleSyrup {
      display: none;
    }
    button {
      background: var(--primary);
      color: white;
      border: 0;
      padding: 0.6rem 1rem;
      border-radius: 2px;
      cursor: pointer;
      --cast: 2px;
      box-shadow: var(--cast) var(--cast) 0 var(--grey);
      text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
      transition: all 0.2s;
      &:hover {
        --cast: 4px;
        background-color: var(--secondary);
      }
    }
    input,
    textarea {
      background: #fff;
      border: 1px solid var(--grey);
      padding: 1rem;
    }
    textarea {
      height: 21rem;
    }
    svg {
      padding-right: 1rem;
    }
    legend {
      float: left;
      text-align: center;
      font-size: 85%;
      border-bottom: 1px solid var(--grey);
      padding: 1rem;
    }
    div {
      padding: 0;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
    text-align: center;
    form {
      text-align: left;
    }
  }
`

export default function ContactPage() {
  const data = useStaticQuery(graphql`
    query {
      contact: file(absolutePath: { regex: "/rome-3.jpg/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <PortfolioListingStyles className="container single-column">
      <Helmet>
        <script
          src={`https://www.google.com/recaptcha/api.js?r=${Math.random()}`}
          async
          defer
        ></script>
      </Helmet>
      <SEO
        title={"Contact"}
        description={
          "Got questions, comments, or concerns? Need a quote for a web project or want to hire me part time? Awesome! Please fill out the provided form and I will get back to you as soon as possible. Looking forward to hearing from you!"
        }
      />

      <article>
        <header className="box">
          <h1 className="mark">
            <FaEdit />
            Contact
          </h1>
        </header>

        <ContactPageStyles className="box content">
          <div>
            <p>
              Got questions, comments, concerns? Need a quote for a web project
              or want to hire me part time? Awesome! Please fill out the
              provided form and I will get back to you as soon as possible. I'm
              looking forward to hearing from you!
            </p>
            <figure>
              <GatsbyImage
                image={data.contact.childImageSharp.gatsbyImageData}
                alt="Steven Brown"
              />
            </figure>
          </div>
          <form action="https://formspree.io/f/mlearrjj" method="POST">
            <fieldset>
              <legend>Contact Form</legend>
              <label htmlFor="name">
                <FaUser />
                Name
              </label>
              <input
                type="text"
                name="_name"
                id="name"
                placeholder="e.g. john doe"
                required
              />
              <label htmlFor="email">
                <FaEnvelope />
                Email
              </label>
              <input
                type="email"
                name="_replyto"
                id="email"
                placeholder="email@domain.com"
                required
              />
              <label htmlFor="message">
                <FaEdit />
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="type here"
                required
              />
              <input type="text" name="_gotcha" className="mapleSyrup" />
              <div
                className="g-recaptcha"
                data-sitekey="6Ldry4UaAAAAABBpzHUPhDuzItukepJmzJrbTPqW"
              ></div>
              <button type="submit" value="Send Message!">
                Send Message!
              </button>
            </fieldset>
          </form>
        </ContactPageStyles>
      </article>
    </PortfolioListingStyles>
  )
}
