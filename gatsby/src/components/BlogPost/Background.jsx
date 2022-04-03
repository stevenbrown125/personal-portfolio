import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Background({ page }) {
  let image = 'rome-optimized.jpg';
  switch (page) {
    case 'blog':
      image = (
        <StaticImage
          className="w-full h-full max-h-[1200px] shadow-lg"
          imgClassName="object-top"
          placeholder="blurred"
          src="../../images/campaignia-optimized.jpg"
          alt="Campaignia, Italy"
        />
      );
      break;
    case 'contact':
      image = (
        <StaticImage
          className="w-full h-full max-h-[1200px] shadow-lg"
          imgClassName="object-top"
          placeholder="blurred"
          src="../../images/pompei-optimized.jpg"
          alt="Pompei, Italy"
        />
      );
      break;
    case 'portfolio':
      image = (
        <StaticImage
          className="w-full h-full max-h-[1200px] shadow-lg"
          imgClassName="object-top"
          placeholder="blurred"
          src="../../images/garda-optimized.jpg"
          alt="Lake Garda, Italy"
        />
      );
      break;
    default:
      image = (
        <StaticImage
          className="w-full h-full max-h-[1200px] shadow-lg"
          imgClassName="object-top"
          placeholder="blurred"
          src="../../images/rome-optimized.jpg"
          alt="Rome, Italy"
        />
      );
  }
  return (
    <div className="absolute inset-0 z-0">
      {image}
    </div>
  );
}
