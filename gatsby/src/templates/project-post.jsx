import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaTag } from 'react-icons/fa';
import Bio from '../components/Bio';
import Sidebar from '../components/Sidebar';
import RichText from '../components/RichText';
import SEO from '../components/Seo';

export default function ProjectPostTemplate({ data: { project } }) {
  return (
    <>
      <SEO
        title={project.name}
        description={project._rawDescription}
        image={project.image.asset.gatsbyImageData}
        article
      />
      <section className="relative py-4 md:py-8">
        <div className="relative flex mx-auto max-w-7xl">
          <Sidebar args={['technologies', 'featured-project']} />
          <div>
            <article className="shadow-sm bg-stone-50 rounded-b-md">
              <header className="relative">
                <GatsbyImage
                  className="w-auto border-b h-96 border-stone-400"
                  imgClassName="object-center"
                  image={project.image.asset.gatsbyImageData}
                  alt={project.name}
                />
                <ul className="absolute inline-flex text-sm top-2 right-4 gap-x-2">
                  {project.technologies.map((tag) => (
                    <li key={project.id + tag.id}>
                      <Link to={`/blog/tag/${tag.slug.current}`} className="flex items-center px-3 py-1 rounded-lg gap-x-2 bg-secondary-light hover:bg-amber-500 font-lighter ">
                        <FaTag />
                        {tag.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </header>
              <h2 className="pt-4 text-3xl font-semibold text-center">{project.name}</h2>
              <p className="pb-4 text-sm font-light text-center border-b border-amber-600">
                Written on
                {' '}
                {project.publishedAt}
              </p>
              <div className="p-8 prose prose-xl max-w-none rounded-b-md">
                <RichText body={project._rawDescription} />

              </div>
              <p className="px-8 pb-8 prose-xl text-slate-900">
                <a href={`https://${project.demo}`} className="border-b border-amber-600 hover:text-amber-600" target="_blank" rel="noreferrer">Check out this project live!</a>
              </p>

            </article>
            <Bio />
          </div>
        </div>
      </section>
    </>
  );
}

export const query = graphql`
query($slug: String!) {
   project: sanityProject(slug: { current: { eq: $slug } }) {
        id
        publishedAt(formatString: "dddd MMMM Do, YYYY")
        demo
        technologies {
          id
          name
          slug {
            current
          }
        }
        slug {
          current
        }
        name
        _rawDescription
        image {
          asset {
            gatsbyImageData
          }
        }
      }
  }
  
`;
