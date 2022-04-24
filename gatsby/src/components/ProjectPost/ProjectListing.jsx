import { Link } from 'gatsby';
import React from 'react';
import { FaCode } from 'react-icons/fa';

export default function ProjectListing({ project }) {
  return (
    <article className="pb-8 mb-4 shadow-sm bg-stone-50" key={project.id}>
      <header className="relative" />
      <h2 className="px-4 pt-4 pb-2 text-2xl text-center md:text-left">
        <Link to={`/portfolio/project/${project.slug.current}`} className="border-b-2 border-amber-600 hover:text-amber-600 ">{project.name}</Link>
      </h2>
      <p className="px-4 pb-4 text-sm font-light text-center md:text-left">
        Written on
        {' '}
        {project.publishedAt}
      </p>
      <div className="px-6">
        <div className="prose lg:prose-lg max-w-none text-slate-900 line-clamp-6">
          {project.excerpt}
          ...
        </div>
      </div>

      <ul className="flex flex-wrap justify-center px-6 py-4 md:justify-start">
        {project.technologies.map((technology) => (
          <li key={project.id + technology.id} className="flex-shrink-0 px-1 py-1">
            <Link to={`/portfolio/technology/${technology.slug.current}`} className="flex items-center px-3 py-1 rounded-lg gap-x-2 bg-secondary-light hover:bg-amber-500 font-lighter ">
              <FaCode />
              {technology.name}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
