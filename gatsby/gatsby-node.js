const path = require('path');

/* Create Individual Post Pages */

async function turnPostsIntoPages({ graphql, actions }) {
  const postTemplate = path.resolve('./src/templates/blog-post.jsx');
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          name
          slug {
            current
          }
          id
        }
      }
    }
  `);
  data.posts.nodes.forEach((post) => {
    actions.createPage({
      path: `blog/${post.slug.current}`,
      component: postTemplate,
      context: {
        post,
        slug: post.slug.current,
      },
    });
  });
}

async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTemplate = path.resolve('./src/templates/project-post.jsx');
  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        nodes {
          name
          slug {
            current
          }
          id
        }
      }
    }
  `);
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      path: `portfolio/project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        project,
        slug: project.slug.current,
      },
    });
  });
}

/* Create Blog Listing Page */

async function createBlogListingsPages({ graphql, actions }) {
  const listingTemplate = path.resolve('./src/templates/blog-listing.jsx');
  const itemsPerPage = 3;
  const { data } = await graphql(`
    query {
      count: allSanityPost {
        totalCount
      }
    }
  `);
  const pages = Math.ceil((data.count.totalCount - 1) / itemsPerPage);
  Array.from({ length: pages }).forEach((_, i) => {
    actions.createPage({
      path: `/blog${i === 0 ? '' : `/${i + 1}`}`,
      component: listingTemplate,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        pages,
        currentPage: i + 1,
      },
    });
  });
}

async function createCategoryPage(actions, graphql, category) {
  const listingTemplate = path.resolve('./src/templates/category-listing.jsx');
  const itemsPerPage = 3;
  const { data } = await graphql(
    `
      query ($cat: String!) {
        count: allSanityPost(
          filter: { category: { slug: { current: { eq: $cat } } } }
        ) {
          totalCount
          nodes {
            slug {
              current
            }
          }
        }
      }
    `,
    { cat: category.slug.current }
  );
  const pages = Math.ceil(data.count.totalCount / itemsPerPage);
  // Ensure we still create the category page even if there aren't any entries
  Array.from({ length: pages === 0 ? 1 : pages }).forEach((_, i) => {
    actions.createPage({
      path: `/blog/category/${category.slug.current}${
        i === 0 ? '' : `/${i + 1}`
      }`,
      component: listingTemplate,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        pages,
        cat: category.slug.current,
        currentPage: i + 1,
      },
    });
  });
  return category;
}

// This took a hot minute and a better understanding of promises
async function createCategoryListingPages({ graphql, actions }) {
  // First get all the categories that we will create and
  // await the results
  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        totalCount
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);
  // Next we will create an array of promises in results
  // This function will create each individual Category
  // page and return a Promise
  const results = await data.categories.nodes.map((category) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    createCategoryPage(actions, graphql, category)
  );

  // Now we have all our category pages being created
  // we have to wait until they have been completed
  // before we return this promise as being resolved
  await Promise.allSettled(results);
}

async function createTagPage(actions, graphql, tag) {
  const listingTemplate = path.resolve('./src/templates/tag-listing.jsx');
  const itemsPerPage = 3;
  const { data } = await graphql(
    `
      query ($tag: String!) {
        count: allSanityPost(
          filter: { tags: { elemMatch: { slug: { current: { eq: $tag } } } } }
        ) {
          totalCount
          nodes {
            slug {
              current
            }
          }
        }
      }
    `,
    { tag: tag.slug.current }
  );
  const pages = Math.ceil(data.count.totalCount / itemsPerPage);
  // Ensure we still create the category page even if there aren't any entries
  Array.from({ length: pages === 0 ? 1 : pages }).forEach((_, i) => {
    actions.createPage({
      path: `/blog/tag/${tag.slug.current}${i === 0 ? '' : `/${i + 1}`}`,
      component: listingTemplate,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        pages,
        tag: tag.slug.current,
        currentPage: i + 1,
      },
    });
  });
  return tag;
}

// This took a hot minute and a better understanding of promises
async function createTagListingPages({ graphql, actions }) {
  // First get all the categories that we will create and
  // await the results
  const { data } = await graphql(`
    query {
      tags: allSanityTag {
        totalCount
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);
  // Next we will create an array of promises in results
  // This function will create each individual Category
  // page and return a Promise
  const results = await data.tags.nodes.map((tag) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    createTagPage(actions, graphql, tag)
  );

  // Now we have all our category pages being created
  // we have to wait until they have been completed
  // before we return this promise as being resolved
  await Promise.allSettled(results);
}

/* Create Portfolio Listing Pages */
async function createPortfolioListingsPages({ graphql, actions }) {
  const listingTemplate = path.resolve('./src/templates/project-listing.jsx');
  const itemsPerPage = 3;
  const { data } = await graphql(`
    query {
      count: allSanityProject {
        totalCount
      }
    }
  `);
  const pages = Math.ceil((data.count.totalCount - 1) / itemsPerPage);
  Array.from({ length: pages }).forEach((_, i) => {
    actions.createPage({
      path: `/portfolio${i === 0 ? '' : `/${i + 1}`}`,
      component: listingTemplate,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        pages,
        currentPage: i + 1,
      },
    });
  });
}

async function createTechnologyPage(actions, graphql, technology) {
  const listingTemplate = path.resolve(
    './src/templates/technology-listing.jsx'
  );
  const itemsPerPage = 3;
  const { data } = await graphql(
    `
      query ($tech: String!) {
        count: allSanityProject(
          filter: {
            technologies: { elemMatch: { slug: { current: { eq: $tech } } } }
          }
        ) {
          totalCount
          nodes {
            slug {
              current
            }
          }
        }
      }
    `,
    { tech: technology.slug.current }
  );
  const pages = Math.ceil(data.count.totalCount / itemsPerPage);
  // Ensure we still create the category page even if there aren't any entries
  Array.from({ length: pages === 0 ? 1 : pages }).forEach((_, i) => {
    actions.createPage({
      path: `/portfolio/technology/${technology.slug.current}${
        i === 0 ? '' : `/${i + 1}`
      }`,
      component: listingTemplate,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        pages,
        tech: technology.slug.current,
        currentPage: i + 1,
      },
    });
  });
  return technology;
}

// This took a hot minute and a better understanding of promises
async function createTechnologyListingPages({ graphql, actions }) {
  // First get all the categories that we will create and
  // await the results
  const { data } = await graphql(`
    query {
      technologies: allSanityTechnology {
        totalCount
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);
  // Next we will create an array of promises in results
  // This function will create each individual Category
  // page and return a Promise
  const results = await data.technologies.nodes.map((technology) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    createTechnologyPage(actions, graphql, technology)
  );

  // Now we have all our category pages being created
  // we have to wait until they have been completed
  // before we return this promise as being resolved
  await Promise.allSettled(results);
}

// eslint-disable-next-line import/prefer-default-export
exports.createPages = async (params) => {
  await Promise.all([
    turnPostsIntoPages(params),
    turnProjectsIntoPages(params),
    createBlogListingsPages(params),
    createPortfolioListingsPages(params),
    createCategoryListingPages(params),
    createTagListingPages(params),
    createTechnologyListingPages(params),
  ]);
};
