const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Komobex Inel`,
    description: `Instalacje i sieci zewnętrzne, instalacje wenętrzne, instalacje przemysłowe`,
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
        name: `main-page-images`,
        path: `${__dirname}/src/images/mainPage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about-page-images`,
        path: `${__dirname}/src/images/aboutPage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdfs`,
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
        background_color: `#E31E24`,
        theme_color: `#E31E24`,
        display: `minimal-ui`,
        icon: `src/images/komobex-icon.png`, // This path is relative to the root of the site.
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans:400,300,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-eslint",
  ],
}
