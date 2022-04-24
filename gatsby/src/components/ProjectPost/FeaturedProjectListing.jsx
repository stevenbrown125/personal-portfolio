import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { FaCode, FaStar } from 'react-icons/fa';

export default function FeaturedProjectListing({ project }) {
  return (
    <article className="pb-8 mb-4 shadow-sm bg-stone-50">
      <header className="relative">
        <GatsbyImage
          className="w-auto border-b h-96 border-stone-400"
          imgClassName="object-center"
          image={project.image.asset.gatsbyImageData}
          alt={project.name}
        />
        <span className="absolute top-0 left-0 flex items-center px-4 pt-2 pb-2 text-sm font-bold text-center uppercase rounded-br shadow-lg bg-primary">
          <FaStar className="mr-2" />
          Featured
        </span>
        <ul className="absolute flex flex-wrap justify-end gap-2 py-4 ml-20 text-sm top-2 right-4">
          {project.technologies.map((technology) => (
            <li key={`featured-${technology.id}`}>
              <Link to={`/portfolio/technology/${technology.slug.current}`} className="flex items-center px-3 py-1 rounded-lg gap-x-2 bg-secondary-light hover:bg-amber-500 font-lighter ">
                <FaCode />
                {technology.name}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <h2 className="px-4 pt-4 pb-2 text-2xl text-center md:text-left">
        <Link to={`/portfolio/project/${project.slug.current}`} className="border-b-2 border-amber-600 hover:text-amber-600">{project.name}</Link>
      </h2>
      <p className="px-4 pb-4 text-sm font-light text-center md:text-left">
        Written on
        {' '}
        {project.publishedAt}
      </p>
      <div className="px-8">
        <div className="prose text-center lg:prose-lg max-w-none text-slate-900 line-clamp-6 md:text-left">
          {project.excerpt}
          ...
        </div>
      </div>
    </article>
  );
}
