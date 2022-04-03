import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: sanityAuthor {
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <section className="p-4 mx-auto my-4 text-center border shadow-md md:rounded-md max-w-7xl border-stone-200 bg-stone-50" itemScope="person">
      <header>
        <GatsbyImage
          image={data.avatar.image.asset.gatsbyImageData}
          alt={author?.name || ''}
          className="m-2 rounded-full w-28 h-28"
          itemType="image"
        />
        <h2 className="text-2xl" itemType="name">{author.name}</h2>
        <div className="flex justify-center mb-2 text-2xl gap-x-1">
          <a
            href="https://twitter.com/Design4TheWeb"
            target="_blank"
            className="transition duration-300 ease-in-out delay-150 text-twitter hover:-translate-y-1 hover:scale-110"
            rel="noreferrer"
          >
            <FaTwitterSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/stevenbrown125/"
            target="_blank"
            className="transition duration-300 ease-in-out delay-150 text-linkedin hover:-translate-y-1 hover:scale-110"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/stevenbrown125"
            target="_blank"
            className="transition duration-300 ease-in-out delay-150 text-github hover:-translate-y-1 hover:scale-110"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </header>
      <p className="px-4 tracking-wide text-md lg:text-lg md:px-12 xl:px-32" itemType="description">{author?.summary || null}</p>
      <p className="my-4 text-md lg:text-lg">
        Follow me on Twitter
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://twitter.com/${social?.twitter || ''}`}
          className="pl-1 border-b border-amber-600 hover:text-amber-600"
        >
          {social?.twitter ? `@${social?.twitter}` : ''}
        </a>
      </p>
    </section>
  );
}
