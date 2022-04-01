import React from 'react';
import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';

const builder = urlBuilder({
  projectId: 'lbvh0g0x',
  dataset: 'production',
});

const components = {
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="list-disc ">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal mt-lg">{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <li className="">{children}</li>,
    number: ({ children }) => (
      <li className="list-decimal mt-lg">{children}</li>
    ),
    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => (
      <li>
        ✅
        {' '}
        {children}
      </li>
    ),
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => <em className="text-gray-600">{children}</em>,

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a
          className="font-normal no-underline border-b border-amber-600 hover:text-amber-600"
          href={value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
        >
          {children}
        </a>
      );
    },

  },
  types: {
    inlineImage: ({ value }) => (
      <div className="flex items-center justify-center">
        <figure>
          <img
            src={builder
              .image(value.image)}
            className="h-96"
            alt={value.alt || ' '}
            loading="lazy"
          />
          <figcaption className="pr-4 text-sm italic text-right">{value?.alt}</figcaption>
        </figure>
      </div>
    ),
    callToAction: ({ value, isInline }) => (isInline ? (
      <a href={value.url}>{value.text}</a>
    ) : (
      <div className="callToAction">{value.text}</div>
    )),
  },
};

export default function RichText({ body }) {
  return <PortableText value={body} components={components} />;
}
