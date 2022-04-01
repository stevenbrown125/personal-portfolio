import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FaCodeBranch } from 'react-icons/fa';
import { GatsbyImage } from 'gatsby-plugin-image';
import RichText from './RichText';

const query = graphql`
query {
    project: sanityProject(featured: {eq: true}) {
        _rawDescription
        id
        image {
          asset {
            gatsbyImageData
          }
        }
        slug {
          current
        }
        name
        publishedAt(formatString: " MMMM Do, YYYY")
      }
  }
`;

export default function FeaturedProject() {
  const { project } = useStaticQuery(query);
  return (
    <div className="border border-stone-400 rounded-md shadow-md bg-stone-50 mb-4">
      <h2 className="bg-secondary-light text-2xl flex gap-x-2 items-center py-2 px-4 border-b border-stone-500 shadow rounded-t-md">
        <FaCodeBranch />
        Featured Project
      </h2>
      <div className="text-lg pb-4">
        <GatsbyImage
          className="w-auto h-32 border-b border-stone-400"
          imgClassName="object-center"
          image={project.image.asset.gatsbyImageData}
          alt={project.title}
        />
        <h3 className="font-bold p-2 text-center">{project.name}</h3>
        <p className="text-sm font-light text-center pb-2 px-2 ">
          Created on
          {' '}
          {project.publishedAt}
        </p>
        <div className="px-4 line-clamp-6">
          <RichText body={project._rawDescription} />
        </div>
        <div className="mt-3 text-right pr-6 ">
          <Link to={`/portfolio/project/${project.slug.current}`} className="border-b border-amber-600 hover:text-amber-600 italic  text-md">Read more...</Link>
        </div>
      </div>
    </div>
  );
}
