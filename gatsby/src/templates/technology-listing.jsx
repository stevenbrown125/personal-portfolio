/* eslint-disable multiline-ternary */
import React from 'react';
import { graphql, Link } from 'gatsby';
import { FaCode, FaCodeBranch } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import Bio from '../components/Bio';
import Sidebar from '../components/Sidebar';
import RichText from '../components/RichText';
import DropDownMenu from '../components/DropDownMenu';
import SEO from '../components/Seo';

export default function TechnologyListing({ data: { projects, technology }, pageContext }) {
  return (
    <>
      <SEO
        title={`${technology.name} projects | Page ${pageContext.currentPage}`}
      />
      <section className="relative py-4 md:py-8">
        <div className="relative flex mx-auto max-w-7xl">
          <Sidebar args={['technologies', 'featured-project']} />
          <div>
            <div className="relative z-20 flex items-center justify-between px-6 py-2 mb-4 rounded-sm shadow-md bg-secondary-light">
              <h2 className="flex items-center text-lg font-semibold text-center lg:text-3xl md:text-left">
                <FaCodeBranch className="pr-2" />
                All
                {' '}
                {technology.name}
                {' '}
                projects
              </h2>
              <div className={` ${pageContext.pages <= 1 ? 'hidden' : 'flex'} items-center gap-x-2`}>
                <p className="hidden text-lg font-semibold md:block">Jump to Page:</p>
                <DropDownMenu current={pageContext.currentPage} pages={pageContext.pages} />
              </div>
            </div>
            {projects.nodes.length > 0 ? '' : (
              <article className="shadow-sm bg-stone-50 ">
                <header className="relative" />
                <div className="px-8 py-8 ">
                  <div className="text-xl text-slate-900">
                    <h2 className="text-2xl font-semibold">Oh no!</h2>
                    <p className="p-4">There&rsquo;s no entries for this technology. Tell me to write some!</p>
                  </div>
                </div>

              </article>
            )}
            {projects.nodes.map((project) => (
              <article className="pb-8 mb-4 shadow-sm bg-stone-50" key={`article-${project.id}`}>
                <header className="relative" />
                <h2 className="px-4 pt-4 pb-2 text-2xl text-center md:text-left">
                  <Link to={`/portfolio/project/${project.slug.current}`} className="border-b-2 border-amber-600 hover:text-amber-600">{project.name}</Link>
                </h2>
                <p className="px-4 pb-4 text-sm font-light text-center md:text-left">
                  Written on
                  {' '}
                  {project.publishedAt}
                </p>
                <div className="px-8 ">
                  <div className="prose text-center lg:prose-lg max-w-none text-slate-900 line-clamp-6 md:text-left">
                    <RichText body={project._rawDescription} />
                  </div>
                </div>

                <ul className="flex flex-wrap justify-center px-6 py-4 md:justify-start">
                  {project.technologies.map((tech) => (
                    <li key={project.id + tech.id} className="flex-shrink-0 px-1 py-1">
                      <Link to={`/portfolio/technology/${tech.slug.current}`} className="flex items-center px-3 py-1 rounded-lg gap-x-2 bg-secondary-light hover:bg-amber-500 font-lighter ">
                        <FaCode />
                        {tech.name}
                      </Link>

                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <Bio />
          </div>
        </div>
      </section>
    </>
  );
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!, $tech: String!)  {
    projects: allSanityProject(limit: $limit, skip: $skip, filter: { technologies: {elemMatch: {slug: {current: {eq: $tech } } }} }) {
      nodes {
        _rawDescription
        featured
        id
        publishedAt(formatString: "dddd MMMM Do, YYYY")
        slug {
          current
        }
        name
        technologies {
          slug {
            current
          }
          name
          id
        }
      }
    }

    technology: sanityTechnology(slug: {current: {eq: $tech }}) {
        name
    }
      
      
  }
`;
