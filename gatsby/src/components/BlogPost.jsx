import React from 'react';
import Bio from './Bio';
import Sidebar from './Sidebar';
import BlogHeader from './BlogPost/BlogHeader';
import BlogContent from './BlogPost/BlogContent';

export default function BlogPost({ post }) {
  return (
    <section className="relative py-4 md:py-8 opacity-[95%]">
      <div className="relative flex mx-auto max-w-7xl">
        <Sidebar args={['categories', 'tags', 'featured-post']} />
        <div>
          <article className="shadow-sm bg-stone-50 rounded-b-md">
            <BlogHeader post={post} />
            <BlogContent post={post} />
          </article>
          <Bio />
        </div>
      </div>
    </section>
  );
}
