import React from 'react';
import { FaUser, FaEnvelope, FaEdit } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import SEO from '../components/Seo';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <script
          src={`https://www.google.com/recaptcha/api.js?r=${Math.random()}`}
          async
          defer
        />
      </Helmet>
      <SEO
        title="Contact"
        description="Got questions, comments, or concerns? Need a quote for a web project or want to hire me part time? Awesome! Please fill out the provided form and I will get back to you as soon as possible. Looking forward to hearing from you!"
      />
      <section className="relative py-12">
        <div className="absolute inset-0 z-0">
          <StaticImage
            className="w-full h-full min-h-92"
            imgClassName="object-top"
            src="../images/pompei-optimized.jpg"
            alt="Pompei, Italy"
          />
        </div>
        <header className="relative z-10 p-3 mx-auto mb-8 text-4xl rounded-md shadow-lg max-w-7xl bg-secondary-light">
          <h1 className="flex font-bold gap-x-2">
            <FaEdit />
            Contact
          </h1>
        </header>

        <div className="relative z-10 grid grid-cols-1 p-4 mx-auto bg-white rounded-md shadow md:grid-cols-2 max-w-7xl text-slate-900 opacity-90">
          <div>
            <p className="p-4 text-xl first-letter:pl-8 ">
              Do you have questions, comments, concerns? Do you need a quote for a web project
              or want to hire me part time? Are you looking for my offical resume? Awesome!
              Please fill out the provided form and I will get back to you as soon as
              possible. I&rsquo;m looking forward to hearing from you!
            </p>
            <figure className="w-full p-4">
              <StaticImage
                src="../images/rome-3.jpg"
                alt="Steven Brown in Rome"
                className="rounded-md w-92"
              />
              <figcaption className="pr-2 text-sm italic text-right">Photo taken in Pompei, Italy</figcaption>
            </figure>
          </div>
          <form
            action="https://formspree.io/f/mlearrjj"
            method="POST"
            className="p-2"
          >
            <fieldset>
              <legend className="font-medium text-center ">Contact Form</legend>
              <label htmlFor="name">
                <span className="flex items-center pb-1 mt-3 font-medium gap-x-2">
                  <FaUser />
                  Name
                </span>
                <input
                  type="text"
                  name="_name"
                  id="name"
                  placeholder="e.g. john doe"
                  className="w-full p-2 bg-white border border-stone-200"
                  required
                />
              </label>
              <label htmlFor="email">
                <span className="flex items-center pb-1 mt-3 font-medium gap-x-2">
                  <FaEnvelope />
                  Email
                </span>
                <input
                  type="email"
                  name="_replyto"
                  id="email"
                  placeholder="email@domain.com"
                  className="w-full p-2 bg-white border border-stone-200"
                  required
                />

              </label>
              <label htmlFor="message">
                <span className="flex items-center pb-1 mt-3 font-medium gap-x-2">
                  <FaEdit />
                  Message
                </span>
                <textarea
                  name="message"
                  id="message"
                  placeholder="type here"
                  rows="6"
                  className="w-full p-2 bg-white border border-stone-200"
                  required
                />

              </label>
              <input type="text" name="_gotcha" className="mapleSyrup" />

              <div className="flex justify-center md:justify-start">
                <div
                  className="mb-2 g-recaptcha"
                  data-sitekey="6Ldry4UaAAAAABBpzHUPhDuzItukepJmzJrbTPqW"
                />

              </div>
              <button
                type="submit"
                value="Send Message!"
                className="w-full p-4 mt-8 font-medium text-white rounded-sm shadow-md bg-amber-600 hover:bg-amber-700"
              >
                Send Message!
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
}
