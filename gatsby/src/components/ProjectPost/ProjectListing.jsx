import { Link } from 'gatsby';
import React from 'react';
import { FaCode, FaCodeBranch, FaStar } from 'react-icons/fa';
import RichText from '../RichText';

export default function ProjectListing({ project }) {
  return (
    <article className="pb-8 mb-4 shadow-sm bg-stone-50" key={project.id}>
      <header className="relative" />
      <h2 className="px-4 pt-4 pb-2 text-2xl">
        <Link to={`/portfolio/project/${project.slug.current}`} className="border-b-2 border-amber-600 hover:text-amber-600">{project.name}</Link>
      </h2>
      <p className="px-4 pb-4 text-sm font-light">
        Written on
        {' '}
        {project.publishedAt}
      </p>
      <div className="px-8 ">
        <div className="prose lg:prose-lg max-w-none text-slate-900 line-clamp-6">
          <RichText body={project._rawDescription} />
        </div>
      </div>

      <ul className="inline-flex px-8 py-4 gap-x-2">
        {project.technologies.map((technology) => (
          <li key={project.id + technology.id}>
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
