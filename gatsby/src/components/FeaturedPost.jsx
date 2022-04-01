import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FaNewspaper } from 'react-icons/fa';
import { GatsbyImage } from 'gatsby-plugin-image';
import RichText from './RichText';

const query = graphql`
  query {
    post: sanityPost(featured: {eq: true}) {
        _rawBody
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

export default function FeaturedPost() {
  const { post } = useStaticQuery(query);
  return (
    <div className="mb-4 border rounded-md shadow-md border-stone-400 bg-stone-50">
      <h2 className="flex items-center px-4 py-2 text-2xl border-b shadow bg-secondary-light gap-x-2 border-stone-500 rounded-t-md">
        <FaNewspaper />
        Featured Post
      </h2>
      <div className="pb-4 text-lg">
        <GatsbyImage
          className="w-auto h-32 border-b border-stone-400"
          imgClassName="object-center"
          image={post.image.asset.gatsbyImageData}
          alt={post.name}
        />
        <h3 className="pt-2 text-center medium"><Link to={`/blog/${post.slug.current}`} className="border-b border-amber-600 hover:text-amber-600">{post.name}</Link></h3>
        <p className="px-2 pb-2 text-sm font-light text-center ">
          Written on
          {' '}
          {post.publishedAt}
        </p>
        <div className="px-4 prose line-clamp-6">
          <RichText body={post._rawBody} />
        </div>
      </div>
    </div>
  );
}
