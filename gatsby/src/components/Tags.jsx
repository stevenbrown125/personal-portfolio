import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FaTags } from 'react-icons/fa';

const query = graphql`
  query {
    tags: allSanityTag {
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

export default function Tags() {
  const { tags } = useStaticQuery(query);
  return (
    <div className="border border-stone-400 rounded-md shadow-md bg-stone-50 mb-4">
      <h2 className="bg-secondary-light text-2xl flex gap-x-2 items-center py-2 px-4 shadow rounded-t-md">
        <FaTags />
        Tags
      </h2>
      <ul className="p-4">
        {tags.nodes.map((tag) => (
          <li key={`tag-list-${tag.id}`} className="p-1">
            <Link to={`/blog/tag/${tag.slug.current}`} className="text-lg border-b border-amber-600 hover:text-amber-600">{tag.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
