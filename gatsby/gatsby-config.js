require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Steven Brown's Portfolio",
    author: {
      name: 'Steven Brown',
      summary:
        'Javascript Enthusiast, React Developer, Gatsby Student, Unity Hobbiest, Investor, Linguist, Dad, Full Sail Alumni, CEO of @Bliztek',
    },
    description:
      "A website and blog displaying Steven's projects and interests. I design and develop things using React and NodeJS!",
    siteUrl: 'https://stevendevelops.com',
    social: {
      twitter: 'Design4TheWeb',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-twitter',
      options: {
        credentials: {
          consumer_key: process.env.TWITTER_KEY,
          consumer_secret: process.env.TWITTER_SECRET,
          bearer_token: process.env.TWITTER_BEARER,
        },
        queries: {
          latestTweets: {
            endpoint: 'statuses/user_timeline',
            params: {
              screen_name: 'design4theweb',
              include_rts: false,
              exclude_replies: true,
              tweet_mode: 'extended',
            },
          },
        },
      },
    },
    /*
    {
      resolve: "gatsby-source-cloudinary",
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: "image",
        prefix: "steven-brown-portfolio/",
      },
    },
    {
      resolve: "gatsby-transformer-cloudinary",
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: "gatsby-cloudinary",
      },
    },
    */
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'lbvh0g0x',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: 'lbvh0g0x',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',

    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
