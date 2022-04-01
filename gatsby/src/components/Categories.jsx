import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FaLayerGroup } from 'react-icons/fa';

const query = graphql`
  query {
    categories: allSanityCategory {
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

export default function Categories() {
  const { categories } = useStaticQuery(query);
  return (
    <div className="mb-4 border rounded-md shadow-md border-stone-400 bg-stone-50">
      <h2 className="flex items-center px-4 py-2 text-2xl rounded-md shadow bg-secondary-light gap-x-2">
        <FaLayerGroup />
        Categories
      </h2>
      <ul className="p-4">
        {categories.nodes.map((category) => (
          <li key={`sidebar-${category.id}-${category.name}`} className="p-1">
            <Link to={`/blog/category/${category.slug.current}`} className="text-lg border-b border-amber-600 hover:text-amber-600">{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
