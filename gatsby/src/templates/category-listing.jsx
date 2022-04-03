/* eslint-disable multiline-ternary */
import React from 'react';
import { graphql } from 'gatsby';
import { FaRegNewspaper } from 'react-icons/fa';
import Bio from '../components/Bio';
import Sidebar from '../components/Sidebar';
import DropDownMenu from '../components/DropDownMenu';
import SEO from '../components/Seo';
import Background from '../components/BlogPost/Background';
import BlogListing from '../components/BlogPost/BlogListing';

export default function CategoryListing({ data: { posts, category }, pageContext }) {
  return (
    <>
      <SEO
        title={`${category.name} Posts | Page ${pageContext.currentPage}`}
      />
      <section className="relative py-4 md:py-8">
        <div className="relative flex mx-auto max-w-7xl">
          <Sidebar args={['categories', 'tags', 'featured-post']} />
          <div>
            <div className="relative z-20 flex items-center justify-between px-6 py-2 mb-4 rounded-sm shadow-md bg-secondary-light">
              <h2 className="flex items-center text-3xl font-semibold gap-x-2">
                <FaRegNewspaper />
                All
                {' '}
                {category.name}
                {' '}
                Posts
              </h2>
              <div className={` ${pageContext.pages <= 1 ? 'hidden' : 'flex'} items-center gap-x-2`}>
                <p className="text-lg font-semibold">Jump to Page:</p>
                <DropDownMenu current={pageContext.currentPage} pages={pageContext.pages} />
              </div>
            </div>
            {posts.nodes.length > 0 ? '' : (
              <article className="shadow-sm bg-stone-50 ">
                <header className="relative" />
                <div className="px-8 py-8 ">
                  <div className="text-xl text-slate-900">
                    <h2 className="text-2xl font-semibold">Oh no!</h2>
                    <p className="p-4">There&rsquo;s no entries for this category. Tell me to write some!</p>
                  </div>
                </div>
              </article>
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
  query($skip: Int!, $limit: Int!, $cat: String!)  {
    posts: allSanityPost(limit: $limit, skip: $skip, filter: { category: { slug: { current: { eq: $cat } } } }) {
      nodes {
        _rawBody
        featured
        id
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
    category: sanityCategory(slug: {current: {eq: $cat }}) {
        name
    }      
  }
`;
