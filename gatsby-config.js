const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Komobex Inel`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@softo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages/realizations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `realizations-images`,
        path: `${__dirname}/src/images/realizations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `realizations-pdfs`,
        path: `${__dirname}/src/assets/pdfs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "realizations-options-images",
        path: `${__dirname}/src/images/realizations-options`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `main_page_images`,
        path: `${__dirname}/src/assets/images/mainPage`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@screens": path.resolve(__dirname, "src/screens"),
          "@assets": path.resolve(__dirname, "src/assets"),
          "@enums": path.resolve(__dirname, "src/enums"),
        },
        extensions: ["js", "png"],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `300`, `700`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-eslint",
  ],
}
