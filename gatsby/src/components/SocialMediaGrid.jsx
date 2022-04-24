import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function SocialMediaGrid() {
  return (
    <section className="relative z-30 shadow-xl bg-stone-800 ">
      <h3 className="flex items-center justify-center p-6 text-2xl font-medium text-center text-white md:text-3xl lg:text-4xl">
        Let&rsquo;s Connect
        <span className="flex items-center px-4 sm:px-12">
          <a
            href="https://twitter.com/Design4TheWeb"
            target="_blank"
            className="px-2 transition duration-300 ease-in-out delay-150 hover:text-twitter hover:-translate-y-1 hover:scale-110 sm:px-6"
            rel="noreferrer"
          >
            <FaTwitter />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/stevenbrown125/"
            target="_blank"
            className="px-2 transition duration-300 ease-in-out delay-150 hover:text-linkedin hover:-translate-y-1 hover:scale-110 sm:px-6"
            rel="noreferrer"
          >
            <FaLinkedinIn />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/stevenbrown125"
            target="_blank"
            className="px-2 transition duration-300 ease-in-out delay-150 hover:text-github hover:-translate-y-1 hover:scale-110 sm:px-6"
            rel="noreferrer"
          >
            <FaGithub />
            <span className="sr-only">GitHub</span>
          </a>
        </span>
      </h3>
    </section>
  );
}
