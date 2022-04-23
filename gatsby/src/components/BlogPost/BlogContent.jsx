import React from 'react';

import PropTypes from 'prop-types';
import RichText from '../RichText';

export default function BlogContent({ post }) {
  return (
    <>
      <header>
        <h2 className="px-4 pt-2 text-3xl font-semibold text-center" itemType="headline">{post.name}</h2>
        <p className="pb-4 text-sm font-light text-center border-b border-amber-600">
          Written on
          {' '}
          <time dateTime={post.publishedAt} itemType="datePublished">{post.publishedAt}</time>
        </p>
      </header>
      <div className="p-8 prose prose-xl border max-w-none text-slate-900 border-stone-200 md:rounded-b-md" itemType="text">
        {/* eslint-disable-next-line no-underscore-dangle */}
        <RichText body={post._rawBody} />
      </div>
    </>
  );
}

BlogContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.any.isRequired,
};
