import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/Seo';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Homepage"
        description="A website and blog displaying Steven's projects and interests. I design and develop things using  React and NodeJS!"
      />
      <section className="relative pt-12 md:py-12">

        <div className="relative mx-auto max-w-7xl">
          <h1 className="min-w-full px-4 py-6 mx-auto text-4xl font-black tracking-wide text-center bg-white shadow-lg -skew-y-2 sm:text-5xl max-w-max sm:min-w-min sm:px-12 md:rounded-md opacity-90 xl:text-7xl ">Hey, I&rsquo;m Steven Brown</h1>
          <h2 className="z-20 px-4 py-2 mx-auto mb-8 -mt-2 text-2xl font-medium text-center transform rounded-sm shadow-xl md:px-8 bg-secondary-light max-w-max -skew-y-2 xl:text-4xl">
            I  bring your ideas to the web!
          </h2>
          <div className="max-w-5xl px-4 py-6 mx-auto text-lg bg-white md:px-8 md:my-12 lg:rounded-md md:leading-relaxed md:text-xl md:opacity-90 xl:max-w-7xl xl:text-2xl text-slate-900">
            <p className="p-4 first-letter:pl-8">
              I&rsquo;m a Full Stack Javascript developer from the US
              <span role="img" aria-label="american-flag" />
              . Web Design
              &amp; Development is my passion and I love working with Javascript.
              I usually code using ReactJS and NodeJS while utilizing the NextJS
              or GatsbyJS Frameworks. My goal throughout this next year is to
              deepen my knowledge of TypeScript and understanding of the GraphQL
              API. I also enjoy studying Russian
              <span role="img" aria-label="russian-flag" />
              {' '}
              and am developing
              applications for language acquisition. While doing this, I dive into
              the world of neuroscience and attempt to find ways to increase
              productivity in processes. Oh, and I love to travel and write so
              check out my blog to see some of my latest adventures!
            </p>
            <p className="p-4 first-letter:pl-8">
              I believe in being part of something bigger than myself so let&rsquo;s
              work together! If you are interested in my professional skills, take
              a gander at my
              {' '}
              <Link
                className="border-b border-primary hover:text-primary"
                to="/portfolio"
              >
                porfolio
              </Link>
              !
            </p>
            <p className="p-4 first-letter:pl-8">
              This is the second version of my portfolio site! I rebuilt it with
              {' '}
              <span role="img" aria-label="heart">
                love
                {' '}
              </span>
              using GatsbyJS V4, Sanity, GraphQL, and Tailwind CSS. It is
              meant to serve as a place to display all my works and as a
              playground as I explore GatsbyJS and GraphQL in more depth. I have published
              it&rsquo;s source code on github
              on
              {' '}
              <a
                href="https://github.com/stevenbrown125/personal-portfolio"
                target="_blank"
                rel="noreferrer"
                className="border-b border-primary hover:text-primary"
              >
                Github
              </a>
              . I hope you like it!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
