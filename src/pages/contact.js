import React from "react"
import styled from "styled-components"
import contact from "../assets/images/contact.jpg"
import { FaUser, FaEnvelope, FaEdit } from "react-icons/fa"
import SEO from "../components/Seo"

const ContactPageStyles = styled.div`
  input,
  textarea {
    background: #fff;
    border: 1px solid var(--grey);
    padding: 1rem;
  }
  textarea {
    height: 27rem;
  }
  button {
    background: var(--blue);
    border: none;
    &:hover {
      background: var(--lightblue);
    }
  }
  img {
    margin: 1rem 0 2.4rem;
    border: solid 1px #ccc;
    -moz-box-shadow: 1px 1px 5px #999;
    -webkit-box-shadow: 1px 1px 5px #999;
    box-shadow: 1px 1px 5px #999;
    border: solid 1px #efefef;
  }
`

const ContactGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  div img {
    margin: 0 auto;
    width: 98%;
  }
  form {
    font-size: 1.8rem;
    fieldset {
      display: grid;
      gap: 0.8rem;
    }
    .mapleSyrup {
      display: none;
    }
  }
`

export default function ContactPage() {
  return (
    <div className="container">
      <SEO
        title={`Contact`}
        description={`Got questions, comments, or concerns? Need a quote for a web project or want to hire me part time? Awesome! Please fill out the provided form and I will get back to you as soon as possible. Looking forward to hearing from you!`}
      />
      <div>
        <h1 className="mark content title-section">
          <FaEdit />
          Contact
        </h1>
      </div>

      <ContactPageStyles className="box content">
        <ContactGridStyles>
          <div>
            <p>
              Got questions, comments, concerns? Need a quote for a web project
              or want to hire me part time? Awesome! Please fill out the
              provided form and I will get back to you as soon as possible. I'm
              looking forward to hearing from you!
            </p>
            <img src={contact} alt="Contact Steven Brown" />
          </div>
          <form>
            <fieldset>
              <legend>Contact Form</legend>
              <label htmlFor="name">
                <FaUser />
                Name
              </label>
              <input
                type="text"
                name="name"
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
                name="email"
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
              <input
                type="mapleSyrup"
                name="mapleSyrup"
                id="mapleSyrup"
                className="mapleSyrup"
              />
              <button type="submit" name="submit" value="Send Message!">
                Send Message!
              </button>
            </fieldset>
          </form>
        </ContactGridStyles>
      </ContactPageStyles>
    </div>
  )
}
