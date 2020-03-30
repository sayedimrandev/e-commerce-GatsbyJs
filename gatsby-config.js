/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "assets",
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `${__dirname}/data`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
