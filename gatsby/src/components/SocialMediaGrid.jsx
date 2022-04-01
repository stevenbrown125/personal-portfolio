import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function SocialMediaGrid() {
  return (
    <section className="bg-stone-800 relative z-30 shadow-xl ">
      <h3 className="text-white text-center text-3xl lg:text-4xl font-medium p-6 flex justify-center items-center">
        Let&rsquo;s Connect
        <span className="flex gap-x-4 sm:gap-x-12 px-4 sm:px-12 items-center">
          <a
            href="https://twitter.com/Design4TheWeb"
            target="_blank"
            className="hover:text-twitter transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/stevenbrown125/"
            target="_blank"
            className="hover:text-linkedin transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/stevenbrown125"
            target="_blank"
            className="hover:text-github transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </span>
      </h3>
    </section>
  );
}
