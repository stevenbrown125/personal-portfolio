/* eslint-disable multiline-ternary */
import React from 'react';
import { graphql } from 'gatsby';
import { FaCodeBranch } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import Bio from '../components/Bio';
import Sidebar from '../components/Sidebar';
import DropDownMenu from '../components/DropDownMenu';
import SEO from '../components/Seo';
import FeaturedProjectListing from '../components/ProjectPost/FeaturedProjectListing';
import ProjectListing from '../components/ProjectPost/ProjectListing';

export default function ProjectListingTemplate({ data: { projects, featured }, pageContext }) {
  return (
    <>
      <SEO
        title={`Portfolio | Page ${pageContext.currentPage}`}
      />
      <div className="absolute inset-0 z-0">
        <StaticImage
          className="w-full h-full max-h-[1200px] shadow-lg"
          imgClassName="object-top"
          src="../images/garda-optimized.jpg"
          alt="Lake Garda, Italy"
        />
      </div>
      <section className="relative py-4 md:py-8">
        <div className="relative flex mx-auto max-w-7xl">
          <Sidebar args={['technologies', 'featured-project']} />
          <div>
            <div className="relative z-20 flex items-center justify-between px-6 py-2 mb-4 rounded-sm shadow-md bg-secondary-light">
              <h2 className="flex items-center text-3xl font-semibold gap-x-2">
                <FaCodeBranch />
                All Projects
              </h2>
              <div className={` ${pageContext.pages <= 1 ? 'hidden' : 'flex'} items-center gap-x-2`}>
                <p className="text-lg font-semibold">Jump to Page:</p>
                <DropDownMenu current={pageContext.currentPage} pages={pageContext.pages} />
              </div>
            </div>
            { pageContext.currentPage !== 1 ? ''
              : (
                <FeaturedProjectListing project={featured} />
              )}
            {projects.nodes.map((project) => (
              <ProjectListing project={project} />
            ))}
            <Bio />
          </div>
        </div>
      </section>
    </>
  );
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!)  {
    projects: allSanityProject(limit: $limit, skip: $skip, filter: {featured: {eq: false}}) {
      nodes {
        _rawDescription
        featured
        id
        image {
          asset {
            gatsbyImageData
          }
        }
        publishedAt(formatString: "dddd MMMM Do, YYYY")
        technologies {
          id
          name
          slug {
            current
          }
        }
        slug {
          current
        }
        name
      }
    }
    featured: sanityProject(featured: {eq: true}) {
      _rawDescription
      featured
      id
      image {
        asset {
          gatsbyImageData
        }
      }
      publishedAt(formatString: "dddd MMMM Do, YYYY")
      technologies {
        id
        name
        slug {
          current
        }
      }
      slug {
        current
      }
      name
    }
  }
`;
