import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Background({ picture }) {
  return (
    <div className="absolute inset-0 z-0">
      <StaticImage
        className="w-full h-full max-h-[1200px] shadow-lg"
        imgClassName="object-top"
        src="../../images/campaignia-optimized.jpg"
        alt="Rome, Italy"
      />
    </div>
  );
}
