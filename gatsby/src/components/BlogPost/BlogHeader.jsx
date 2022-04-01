import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaTag } from 'react-icons/fa';
import React from 'react';
import PropTypes from 'prop-types';

export default function BlogHeader({ post }) {
  return (
    <header className="relative">
      <figure>
        <GatsbyImage
          className="w-auto border-b h-96 border-stone-400"
          imgClassName="object-center"
          image={post.image.asset.gatsbyImageData}
          alt={`${post.name} ${post.caption}`}
          itemType="image"
        />
        <figcaption className="pr-4 text-xs italic text-right">{post?.caption}</figcaption>
      </figure>
      <ul className="absolute inline-flex text-sm top-2 right-4 gap-x-2" itemType="keywords">
        {post.tags.map((tag) => (
          <li key={tag.id + post.id}>
            <Link to={`/blog/tag/${tag.slug.current}`} className="flex items-center px-3 py-1 rounded-lg gap-x-2 bg-secondary-light hover:bg-amber-500 font-lighter ">
              <FaTag />
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

BlogHeader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.any.isRequired,
};
