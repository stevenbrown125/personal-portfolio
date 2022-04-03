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

export default function BlogIndex({ data: { posts, featured }, pageContext }) {
  return (
    <>
      <SEO
        title={`Blog Posts | Page ${pageContext.currentPage}`}
      />
      <section className="relative py-4 md:py-8 ">
        <div className="relative flex mx-auto max-w-7xl">
          <Sidebar args={['categories', 'tags', 'featured-post']} />
          <div className="w-full">
            <div className="relative z-20 flex items-center justify-between px-6 py-2 mb-4 rounded-sm shadow-md bg-secondary-light">
              <h2 className="flex items-center text-lg font-semibold lg:text-3xl">
                <FaRegNewspaper className="pr-2" />
                All Blog Posts
              </h2>
              <div className={` ${pageContext.pages <= 1 ? 'hidden' : 'flex'} items-center`}>
                <p className="hidden pr-2 text-lg font-semibold sm:block">Jump to Page:</p>
                <DropDownMenu current={pageContext.currentPage} pages={pageContext.pages} />
              </div>
            </div>
            { pageContext.currentPage !== 1 ? ''
              : (
                <FeaturedPostListing post={featured} />
              )}
            {posts.nodes.map((post) => (
              <BlogListing post={post} key={post.id} />
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
        id
        image {
          asset {
            gatsbyImageData
          }
        }
        publishedAt(formatString: "dddd MMMM Do, YYYY")
        excerpt
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
      excerpt
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
