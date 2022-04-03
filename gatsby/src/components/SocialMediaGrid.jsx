import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function SocialMediaGrid() {
  return (
    <section className="relative z-30 shadow-xl bg-stone-800 ">
      <h3 className="flex items-center justify-center p-6 text-3xl font-medium text-center text-white lg:text-4xl">
        Let&rsquo;s Connect
        <span className="flex items-center px-4 sm:px-12">
          <a
            href="https://twitter.com/Design4TheWeb"
            target="_blank"
            className="px-2 transition duration-300 ease-in-out delay-150 hover:text-twitter hover:-translate-y-1 hover:scale-110 sm:px-6"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/stevenbrown125/"
            target="_blank"
            className="px-2 transition duration-300 ease-in-out delay-150 hover:text-linkedin hover:-translate-y-1 hover:scale-110 sm:px-6"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/stevenbrown125"
            target="_blank"
            className="px-2 transition duration-300 ease-in-out delay-150 hover:text-github hover:-translate-y-1 hover:scale-110 sm:px-6"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </span>
      </h3>
    </section>
  );
}
