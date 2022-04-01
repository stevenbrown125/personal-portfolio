/* eslint-disable multiline-ternary */
import React from 'react';
import { graphql } from 'gatsby';
import { FaRegNewspaper } from 'react-icons/fa';
import Bio from '../components/Bio';
import Sidebar from '../components/Sidebar';
import DropDownMenu from '../components/DropDownMenu';
import SEO from '../components/Seo';
import BlogListing from '../components/BlogPost/BlogListing';
import FeaturedPostListing from '../components/BlogPost/FeaturedPostListing';
import Background from '../components/BlogPost/Background';

export default function BlogIndex({ data: { posts, featured }, pageContext }) {
  return (
    <>
      <SEO
        title={`Blog Posts | Page ${pageContext.currentPage}`}
      />
      <Background />
      <section className="relative py-4 pr-4 md:py-8">
        <div className="relative flex mx-auto max-w-7xl">
          <Sidebar args={['categories', 'tags', 'featured-post']} />
          <div className="w-full">
            <div className="relative z-20 flex items-center justify-between px-6 py-2 mb-4 rounded-sm shadow-md bg-secondary-light">
              <h2 className="flex items-center text-xl font-semibold lg:text-3xl gap-x-2">
                <FaRegNewspaper />
                All Blog Posts
              </h2>
              <div className={` ${pageContext.pages <= 1 ? 'hidden' : 'flex'} items-center gap-x-2`}>
                <p className="text-lg font-semibold">Jump to Page:</p>
                <DropDownMenu current={pageContext.currentPage} pages={pageContext.pages} />
              </div>
            </div>
            { pageContext.currentPage !== 1 ? ''
              : (
                <FeaturedPostListing post={featured} />
              )}
            {posts.nodes.map((post) => (
              <BlogListing post={post} />
            ))}
            <Bio />
          </div>
        </div>
      </section>
    </>
  );
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!)  {
    posts: allSanityPost(limit: $limit, skip: $skip, filter: {featured: {eq: false}}) {
      nodes {
        _rawBody
        id
        image {
          asset {
            gatsbyImageData
          }
        }
        publishedAt(formatString: "dddd MMMM Do, YYYY")
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
    featured: sanityPost(featured: {eq: true}) {
      _rawBody
      id
      image {
        asset {
          gatsbyImageData
        }
      }
      publishedAt(formatString: "dddd MMMM Do, YYYY")
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
      caption
      category {
        slug {
          current
        }
        name
        id
      }
    }
  }
`;
