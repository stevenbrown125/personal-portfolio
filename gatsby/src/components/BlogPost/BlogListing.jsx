import { Link } from 'gatsby';
import React from 'react';
import { FaTag } from 'react-icons/fa';
import PropTypes from 'prop-types';
import RichText from '../RichText';

export default function BlogListing({ post }) {
  return (
    <article className="relative pb-8 mb-4 shadow-sm bg-stone-50" key={post.id} itemScope itemType="blogPost">
      <header className="relative" />
      <h2 className="px-6 pt-4 pb-2 text-lg md:text-xl lg:text-2xl" itemType="headline">
        <Link to={`/blog/${post.slug.current}`} className="border-b-2 border-amber-600 hover:text-amber-600" itemType="url">{post.name}</Link>
      </h2>
      <p className="px-6 pb-4 text-sm font-light">
        Written on
        {' '}
        <time dateTime={post.publishedAt} itemType="datePublished">{post.publishedAt}</time>
      </p>
      <div className="px-8 ">
        <div className="prose max-w-none text-slate-900 line-clamp-6" itemType="text">
          {/* eslint-disable-next-line no-underscore-dangle */}
          <RichText body={post._rawBody} />
        </div>
      </div>
      <ul className="inline-flex px-8 py-4 gap-x-2" itemType="keywords">
        {post.tags.map((tag) => (
          <li key={post.id + tag.id}>
            <Link to={`/blog/tag/${tag.slug.current}`} className="flex items-center px-3 py-1 rounded-lg gap-x-2 bg-secondary-light hover:bg-amber-500 font-lighter">
              <FaTag />
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
