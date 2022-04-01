import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FaLaptopCode } from 'react-icons/fa';

const query = graphql`
  query {
    technologies: allSanityTechnology {
      nodes {
        slug {
          current
        }
        name
        id
      }
    }
  }
`;

export default function Technologies() {
  const { technologies } = useStaticQuery(query);
  return (
    <div className="border border-stone-400 rounded-md shadow-md bg-stone-50 mb-4">
      <h2 className="bg-secondary-light text-2xl flex gap-x-2 items-center py-2 px-4 shadow rounded-t-md">
        <FaLaptopCode />
        Technologies
      </h2>
      <ul className="p-4">
        {technologies.nodes.map((technology) => (
          <li key={`technology-list-${technology.id}`} className="p-1">
            <Link to={`/portfolio/technology/${technology.slug.current}`} className="text-lg border-b border-amber-600 hover:text-amber-600">{technology.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
