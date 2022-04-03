import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import {
  FaTwitter, FaBlog, FaCodeBranch, FaHeart, FaRetweet,
} from 'react-icons/fa';
import RichText from './RichText';

const query = graphql`
query {
  posts: allSanityPost(limit: 2, sort: {fields: publishedAt, order: DESC}) {
    nodes {
      _rawBody
      featured
      id
      image {
        asset {
          gatsbyImageData
        }
      }
      excerpt
      publishedAt
      tags {
        id
        name
        slug {
          current
        }
      }
      slug {
        current
      }
      name
      category {
        slug {
          current
        }
        name
        id
      }
    }
  }
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
    tweets: allTwitterStatusesUserTimelineLatestTweets(
      limit: 2
      sort: {order: ASC, fields: created_at}
    ) {
      nodes {
        id
        retweet_count
        
        full_text
        favorite_count
        created_at
        id_str
      }
      
    }
  }
`;

export default function SupFooterGrid() {
  const { tweets, posts, project } = useStaticQuery(query);

  return (
    <section className="relative z-30 grid grid-cols-1 pb-4 lg:grid-cols-3 gap-x-8 lg:px-8 bg-stone-50">
      {/* Twitter */}
      <div>
        <h3 className="flex items-center p-4 text-2xl font-medium shadow-md bg-secondary-light lg:max-w-max rounded-b-md">
          <FaTwitter className="mr-2" />

          @Design4TheWeb Tweets
        </h3>
        {/* Listing */}
        <div className="px-8 py-4">
          {/* Posts */}
          {tweets.nodes.map((tweet) => (
            <div className="py-6 text-lg border-b border-stone-300 last:border-none">
              <p>
                <a
                  href={`https://twitter.com/Design4TheWeb/status/${tweet.id_str}/`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-stone-500"
                >
                  <FaTwitter className="float-left mr-4 text-2xl prose prose-xl text-twitter" />
                  {tweet.full_text}
                </a>
              </p>
              <div className="flex justify-end pr-4 mt-2 gap-x-2">
                <a
                  href={`https://twitter.com/Design4TheWeb/status/${tweet.id_str}/likes`}
                  target="_blank"
                  className="flex items-center mr-2 transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                  rel="noreferrer"
                >
                  <FaHeart className="mr-1 text-red-500" />
                  {tweet.favorite_count}
                </a>
                <a
                  className="flex items-center mr-2 transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                  href={`https://twitter.com/Design4TheWeb/status/${tweet.id_str}/retweets`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaRetweet className="mr-1 text-green-600" />
                  {tweet.retweet_count}
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
      {/* Latest Blog */}
      <div>
        <h3 className="flex items-center p-4 text-2xl font-medium shadow-md bg-secondary-light lg:max-w-max rounded-b-md">
          <FaBlog className="mr-2" />
          Recent Blog Posts
        </h3>
        <div className="">
          {/* Posts */}
          {posts.nodes.map((post) => (
            <article className="pb-2 mb-2 border-b border-stone-200 last:border-none" key={`footer-${post.id}`}>
              <header className="relative" />
              <h2 className="px-4 pt-4 pb-2 text-xl">
                <Link to={`/blog/${post.slug.current}`} className="border-b-2 border-amber-600 hover:text-amber-600">{post.name}</Link>
              </h2>
              <p className="px-4 pb-2 text-sm font-light">
                Written on
                {' '}
                {post.publishedAt}
              </p>
              <div className="px-4 line-clamp-6">
                <div className="prose lg:prose-lg max-w-none text-slate-900 line-clamp-4">
                  {post.excerpt}
                  ...
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
      <div>
        <h3 className="flex items-center p-4 text-2xl font-medium shadow-md bg-secondary-light lg:max-w-max rounded-b-md">
          <FaCodeBranch className="mr-2" />
          Featured Project
        </h3>
        <div className="py-4 text-lg">
          <GatsbyImage
            className="w-auto h-48 border-b border-stone-400"
            imgClassName="object-center"
            image={project.image.asset.gatsbyImageData}
            alt={project.name}
          />
          <h3 className="p-2 text-xl font-medium text-center">
            {' '}
            <Link to={`/portfolio/project/${project.slug.current}`} className="border-b border-amber-600 hover:text-amber-600">{project.name}</Link>
          </h3>
          <p className="px-2 pb-2 text-sm font-light text-center ">
            Created on
            {' '}
            {project.publishedAt}
          </p>
          <div className="px-8 prose line-clamp-6 lg:prose-lg">
            <RichText body={project._rawDescription} />
          </div>
        </div>
      </div>
    </section>
  );
}
