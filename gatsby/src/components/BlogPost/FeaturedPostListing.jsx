import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { FaTag, FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import RichText from '../RichText';

export default function FeaturedPostListing({ post }) {
  return (
    <article className="pb-8 mb-4 shadow-sm bg-stone-50" itemScope itemType="blogPost">
      <header className="relative">
        <figure>
          <GatsbyImage
            className="w-auto border-b h-96 border-stone-400"
            imgClassName="object-center"
            image={post?.image?.asset?.gatsbyImageData}
            alt={`${post?.name} ${post?.caption}`}
            itemType="image"
          />
          <figcaption className="pr-4 text-sm italic text-right">{post?.caption}</figcaption>
        </figure>
        <span className="absolute top-0 left-0 flex px-4 pt-2 pb-2 text-sm font-bold text-center uppercase rounded-br shadow-lg bg-primary gap-x-2 ">
          <FaStar />
          Featured
        </span>
        <ul className="absolute inline-flex text-sm top-2 right-4 gap-x-2" itemType="keywords">
          {post.tags.map((tag) => (
            <li key={`featured-${tag.id}`}>
              <Link to={`/blog/tag/${tag.slug.current}`} className="flex items-center px-3 py-1 rounded-lg gap-x-2 bg-secondary-light hover:bg-amber-500 font-lighter ">
                <FaTag />
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <h2 className="px-6 pt-2 pb-2 text-lg md:text-xl lg:text-2xl" itemType="headline">
        <Link to={`/blog/${post.slug.current}`} className="border-b-2 border-amber-600 hover:text-amber-600" itemType="url">{post.name}</Link>
      </h2>
      <p className="px-6 pb-4 text-sm font-light">
        Written on
        {' '}
        <time dateTime={post.publishedAt} itemType="datePublished">{post.publishedAt}</time>
      </p>
      <div className="px-8 ">
        <div className="prose lg:prose-lg max-w-none text-slate-900 line-clamp-6" itemType="text">
          {/* eslint-disable-next-line no-underscore-dangle */}
          {post.excerpt}
          ...
        </div>
      </div>
    </article>
  );
}

FeaturedPostListing.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.any.isRequired,
};
