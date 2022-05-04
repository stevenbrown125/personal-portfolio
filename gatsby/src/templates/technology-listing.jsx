/* eslint-disable multiline-ternary */
import React from 'react';
import { graphql } from 'gatsby';
import { FaCodeBranch } from 'react-icons/fa';
import Bio from '../components/Bio';
import Sidebar from '../components/Sidebar';
import DropDownMenu from '../components/DropDownMenu';
import SEO from '../components/Seo';
import ProjectListing from '../components/ProjectPost/ProjectListing';

export default function TechnologyListing({ data: { projects, technology }, pageContext, location }) {
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
              <h2 className="flex items-center pt-1 text-lg font-semibold lg:text-3xl">
                <FaCodeBranch className="mr-2" />
                All
                {' '}
                {technology.name}
                {' '}
                projects
              </h2>
              <div className={` ${pageContext.pages <= 1 ? 'hidden' : 'flex'} items-center gap-x-2`}>
                <p className="hidden text-lg font-semibold md:block">Jump to Page:</p>
                <DropDownMenu current={pageContext.currentPage} pages={pageContext.pages} section={`portfolio/technology/${location.pathname.split('/')[3]}`} />
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
              <ProjectListing project={project} key={project.id} />
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
    projects: allSanityProject(limit: $limit, skip: $skip, filter: { technologies: {elemMatch: {slug: {current: {eq: $tech } } }} }, sort: {fields: publishedAt, order: ASC}) {
      nodes {
        _rawDescription
        featured
        id
        publishedAt(formatString: "dddd MMMM Do, YYYY")
        slug {
          current
        }
        name
        excerpt
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
