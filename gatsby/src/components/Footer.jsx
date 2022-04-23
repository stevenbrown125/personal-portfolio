import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <div className="p-6 text-sm text-center text-white shadow-inner bg-stone-800">
      <p>
        Copyright &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        . All Rights Reserved.
        Read our
        {' '}
        <Link to="/privacy-policy" className="underline hover:text-amber-600">Privacy Policy</Link>
      </p>
    </div>
  );
}
