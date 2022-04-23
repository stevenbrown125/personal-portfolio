import * as React from 'react';
// eslint-disable-next-line import/no-unresolved
import { useLocation } from '@reach/router';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { Link } from 'gatsby';

function isBrowser() {
  return typeof window !== 'undefined';
}

function getValue(key, defaultValue) {
  return isBrowser() && window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key))
    : defaultValue;
}

function setValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function useStickyState(defaultValue, key) {
  const [value, setter] = React.useState(() => getValue(key, defaultValue));

  React.useEffect(() => {
    setValue(key, value);
  }, [key, value]);

  return [value, setter];
}

function CookieConsent() {
  const location = useLocation();
  if (isBrowser()) {
    initializeAndTrack(location);
  }

  const [bannerHidden, setBannerHidden] = useStickyState(
    false,
    'consentCookieHidden',
  );

  const EnableAnalytics = () => {
    document.cookie = 'gatsby-gdpr-google-analytics=true';
    setBannerHidden(true);
  };

  if (!bannerHidden) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-50 w-screen p-4 border-t shadow-inner bg-secondary-light border-amber-300 sm:py-6 ">
        <div className="flex items-center w-full max-w-5xl mx-auto">
          <p className="ml-3 text-lg font-medium text-left text-black">
            <span className="inline">
              We use cookies to analyze traffic, improve our website, and personalize content.
              Please see our
              {' '}
              <Link to="/privacy-policy" className="underline hover:text-amber-600">Privacy Policy</Link>
              {' '}
              for more information.
            </span>
          </p>
        </div>
        <div className="w-full max-w-5xl pt-4 mx-auto md:pr-12 md:flex md:justify-end md:pb-4">
          <div className="mt-2 md:pr-2">
            <button
              type="button"
              onClick={EnableAnalytics}
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-black underline hover:text-amber-600"
            >
              Close
            </button>
          </div>
          <div className="w-full mt-2 md:max-w-[200px]">
            <button
              type="button"
              onClick={() => setBannerHidden(true)}
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-white border border-transparent rounded-md shadow-sm text-amber-600 hover:bg-amber-600 hover:text-white"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      </div>
    );
  }
  return '';
}

export default CookieConsent;
