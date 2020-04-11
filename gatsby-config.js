module.exports = {
  siteMetadata: {
    title: `有朋自远方来`,
    description: `不亦说乎`,
    author: `@shihuhu`,
  },
  plugins: [
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/82a787ac07404fda9df81d765b6afbf8?v=00a4650f5ab8455fabae2368602c791c',
            cacheType: 'html'
          },
          {
            name: 'books',
            table: 'https://www.notion.so/5779d9f7dc5d4cfaa72eac2d7f60268a?v=cfa17c8fb9e74cd2baea615e6f2fa711',
            cacheType: 'static'
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-notion`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
