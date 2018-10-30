module.exports = {
  siteMetadata: {
    title: 'Benevolous',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `username/publication`,
      },
    },
    `gatsby-transformer-remark`
  ]
};
