/* eslint-disable multiline-ternary */
import React from 'react';
import { graphql } from 'gatsby';
import { FaRegNewspaper } from 'react-icons/fa';
import Bio from '../components/Bio';
import Sidebar from '../components/Sidebar';
import DropDownMenu from '../components/DropDownMenu';
import SEO from '../components/Seo';
import BlogListing from '../components/BlogPost/BlogListing';

export default function CategoryListing({ data: { posts, tag }, location, pageContext }) {
  return (
    <>
      <SEO
        title={`${tag.name} Posts | Page ${pageContext.currentPage}`}
      />
      <section className="relative py-4 md:py-8">
        <div className="relative flex mx-auto max-w-7xl">
          <Sidebar args={['categories', 'tags', 'featured-post']} />
          <div>
            <div className="relative z-20 flex items-center justify-between px-6 py-2 mb-4 rounded-sm shadow-md bg-secondary-light">
              <h2 className="flex items-center text-lg font-semibold lg:text-3xl gap-x-2">
                <FaRegNewspaper />
                All
                {' '}
                {tag.name}
                {' '}
                Posts
              </h2>
              <div className={` ${pageContext.pages <= 1 ? 'hidden' : 'flex'} items-center gap-x-2`}>
                <p className="hidden text-lg font-semibold md:block">Jump to Page:</p>
                <DropDownMenu current={pageContext.currentPage} pages={pageContext.pages} />
              </div>
            </div>
            {posts.nodes.length > 0 ? '' : (
              <article className="shadow-sm bg-stone-50 ">
                <header className="relative" />

                <div className="px-8 py-8 ">
                  <div className="text-xl text-slate-900">
                    <h2 className="text-2xl font-semibold">Oh no!</h2>
                    <p className="p-4">There's no entries for this tag. Tell me to write some!</p>
                  </div>
                </div>

              </article>
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
  query($skip: Int!, $limit: Int!, $tag: String!)  {
    posts: allSanityPost(limit: $limit, skip: $skip, filter:  { tags: {elemMatch: {slug: {current: {eq: $tag}}}}}) {
      nodes {
        _rawBody
        featured
        id
        excerpt
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
      }
    }
    tag: sanityTag(slug: {current: {eq: $tag }}) {
        name
    }
  }
`;
