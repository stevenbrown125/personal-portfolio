import React from 'react';
import Categories from './Categories';
import FeaturedPost from './FeaturedPost';
import FeaturedProject from './FeaturedProject';
import Tags from './Tags';
import Technologies from './Technologies';

export default function Sidebar({ args }) {
  return (
    <section className="w-[300px] pl-4 pr-8 flex-shrink-0 hidden md:block">
      {args.map((arg) => {
        switch (arg) {
          case 'categories':
            return (
              <Categories key="category-sidebar" />
            );
          case 'tags':
            return (
              <Tags key="tags-sidebar" />
            );
          case 'featured-project':
            return (
              <FeaturedProject key="featured-project-sidebar" />
            );
          case 'featured-post':
            return (
              <FeaturedPost key="featured-post-sidebar" />
            );
          case 'technologies':
            return (
              <Technologies key="technologies-sidebar" />
            );
          default:
            return <div className="box sidebar" key="latest-blog-posts" />;
        }
      })}
    </section>
  );
}
