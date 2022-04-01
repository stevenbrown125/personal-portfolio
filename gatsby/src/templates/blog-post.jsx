import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/Seo';
import BlogPost from '../components/BlogPost';

export default function BlogPostTemplate({ data: { post } }) {
  const truncate = (str, n) => ((str.length > n) ? `${str.substr(0, n - 1)}...` : str);
  return (
    <>
      <SEO
        title={truncate(post.name, 44)}
        description={truncate(post._rawBody, { length: 255 })}
      />
      <BlogPost post={post} />
    </>
  );
}

export const query = graphql`
query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      _rawBody
      publishedAt(formatString: "dddd MMMM Do, YYYY")
      slug {
        current
      }
      tags {
        id
        name
        slug {
          current
        }
      }
      name
      image {
        asset {
          gatsbyImageData
        }
      }
      id
      caption
    }
  }
  
`;
