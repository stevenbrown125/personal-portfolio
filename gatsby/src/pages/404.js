/* eslint-disable react/jsx-filename-extension */
import { Link } from 'gatsby';
import React from 'react';
import SEO from '../components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 | Page Not Found"
        description="This page does not exist. Not sure how you got here..."
      />
      <section className="relative py-4">
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl px-4 py-8 mx-auto text-lg bg-white md:px-8 md:my-12 lg:rounded-md md:leading-relaxed md:text-xl md:opacity-90 xl:max-w-7xl xl:text-2xl text-slate-900">
            <h1 className="text-5xl font-bold">404: Page Not Found</h1>
            <p className="p-8 text-xl">
              Well hello! How did you get here? My adventures have taken me a
              lot of places but this is a first! Since you&rsquo;re here, let me
              share with you one of my favorite Ted Talks by Tim Berners-Lee on
              the next Web of open linked data.
            </p>
            <p className="px-8 text-xl">
              When you&rsquo;re ready, here is a link back to my{' '}
              <Link
                to="/"
                className="underline text-amber-600 hover:text-amber-800"
              >
                homepage
              </Link>
              . See you soon!
            </p>
            <div className="m-10 aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube-nocookie.com/embed/OM6XIICm_qo?start=8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
