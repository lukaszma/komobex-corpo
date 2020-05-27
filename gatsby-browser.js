/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


import "./src/styles/global.css"
import "./node_modules/react-image-gallery/styles/css/image-gallery.css"
import 'react-tabs/style/react-tabs.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
      import(`intersection-observer`)
    }
  }
