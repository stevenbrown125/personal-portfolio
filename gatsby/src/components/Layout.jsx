import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import SocialMediaGrid from './SocialMediaGrid';
import SupFooterGrid from './SupFooterGrid';

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4QCZHL7SRC"
        />
        <script
          async
          src={withPrefix('js/google-analytics.js')}
          type="text/javascript"
        />
      </Helmet>
      <Header />
      <main className="mt-20 md:mt-24 bg-stone-100">{children}</main>
      <SocialMediaGrid />
      <SupFooterGrid />
      <Footer />
    </>
  );
}

export default Layout;
