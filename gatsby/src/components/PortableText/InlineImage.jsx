import React from 'react';
import urlBuilder from '@sanity/image-url';
import PropTypes from 'prop-types';

export default function InlineImage({ value: { image, alt = '' } }) {
  const builder = urlBuilder({
    projectId: 'lbvh0g0x',
    dataset: 'production',
  });
  return (
    <div className="flex items-center justify-center">
      <figure>
        <img
          src={builder
            .image(image)}
          className="aspect-w-4"
          alt={alt || ''}
          loading="lazy"
        />
        <figcaption className="pr-4 text-sm italic text-right">{alt}</figcaption>
      </figure>
    </div>
  );
}

InlineImage.propTypes = {
  value: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    image: PropTypes.object,
    alt: PropTypes.string,
  }).isRequired,
};
