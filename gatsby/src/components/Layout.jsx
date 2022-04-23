import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import SocialMediaGrid from './SocialMediaGrid';
import SupFooterGrid from './SupFooterGrid';
import Background from './BlogPost/Background';
import CookieConsent from './ConsentBanner';

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
      <Header page={children[1].props.location.pathname.split('/')[1]} />
      <main className="mt-20 md:mt-24 bg-stone-100">
        <Background page={children[1].props.location.pathname.split('/')[1]} />
        {children}
      </main>
      <SocialMediaGrid />
      <SupFooterGrid />
      <Footer />
      <CookieConsent />
    </>
  );
}

export default Layout;
