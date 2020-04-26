/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
<script key="/plugins/jquery.min.js" src="/plugins/jquery.min.js"/>,
<script key="/bootstrap/js/bootstrap.min.js" src="/bootstrap/js/bootstrap.min.js" />,
<script key="/plugins/jquery.easing.js" src="/plugins/jquery.easing.js" />,
<script key="/plugins/jquery.magnific-popup.min.js" src="/plugins/jquery.magnific-popup.min.js" />,
<script key="/plugins/imagesloaded.pkgd.min.js" src="/plugins/imagesloaded.pkgd.min.js" />,
<script key="/plugins/isotope.pkgd.min.js" src="/plugins/isotope.pkgd.min.js" />,
<script key="/plugins/owl.carousel.min.js" src="/plugins/owl.carousel.min.js" />,
<script key="/plugins/parallax.min.js" src="/plugins/parallax.min.js" />,
<script key="/js/navigation.js" src="/js/navigation.js" />,
<script key="/js/script.min.js" src="/js/script.min.js" />,
  ])
}