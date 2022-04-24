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
    <div className="mb-4 border rounded-md shadow-md border-stone-400 bg-stone-50">
      <h2 className="flex items-center px-4 py-2 text-2xl border-b shadow bg-secondary-light gap-x-2 border-stone-500 rounded-t-md">
        <FaCodeBranch />
        Featured Project
      </h2>
      <div className="pb-4 text-lg">
        <GatsbyImage
          className="w-auto h-32 border-b border-stone-400"
          imgClassName="object-center"
          image={project.image.asset.gatsbyImageData}
          alt={project.name}
        />
        <h3 className="p-2 text-center"><Link to={`/portfolio/project/${project.slug.current}`} className="border-b border-amber-600 hover:text-amber-600 text-md">{project.name}</Link></h3>
        <p className="px-2 pb-2 text-sm font-light text-center ">
          Created on
          {' '}
          {project.publishedAt}
        </p>
        <div className="px-4 prose-sm prose line-clamp-6">
          <RichText body={project._rawDescription} />
        </div>
      </div>
    </div>
  );
}
