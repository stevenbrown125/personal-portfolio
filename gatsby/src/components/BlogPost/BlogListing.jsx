import { Link } from 'gatsby';
import React from 'react';
import { FaTag } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function BlogListing({ post }) {
  return (
    <article className="relative pb-8 mb-4 shadow-sm bg-stone-50" key={post.id} itemScope itemType="blogPost">
      <header className="relative" />
      <h2 className="px-6 pt-4 pb-2 text-lg text-center md:text-xl lg:text-2xl md:text-left" itemType="headline">
        <Link to={`/blog/${post.slug.current}`} className="border-b-2 border-amber-600 hover:text-amber-600" itemType="url">{post.name}</Link>
      </h2>
      <p className="px-6 pb-4 text-sm font-light text-center md:text-left">
        Written on
        {' '}
        <time dateTime={post.publishedAt} itemType="datePublished">{post.publishedAt}</time>
      </p>
      <div className="relative px-6 text-center md:text-left">
        <div className="prose max-w-none text-slate-900 line-clamp-6" itemType="text">
          {post.excerpt}
          ...
        </div>
      </div>
      <ul className="flex flex-wrap justify-center px-6 py-4 md:justify-start" itemType="keywords">
        {post.tags.map((tag) => (
          <li key={post.id + tag.id} className="flex-shrink-0 px-1 py-1">
            <Link to={`/blog/tag/${tag.slug.current}`} className="flex items-center flex-shrink-0 px-3 py-1 rounded-lg bg-secondary-light hover:bg-amber-500 font-lighter">
              <FaTag className="mr-2" />
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

BlogListing.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.any.isRequired,
};
