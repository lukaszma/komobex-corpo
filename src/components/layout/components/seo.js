import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql, withPrefix } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700&display=swap" rel="stylesheet"></link>
      <script src={withPrefix("plugins/jquery.min.js")} type="text/javascript"/>
      <script src={withPrefix("bootstrap/js/bootstrap.min.js")} type="text/javascript"/>
      <script src={withPrefix("js/navigation.js")} type="text/javascript"/>
      <script src={withPrefix("plugins/jquery.easing.js")} type="text/javascript"/>
      <script src={withPrefix("plugins/jquery.magnific-popup.min.js")} type="text/javascript"/>
      <script src={withPrefix("plugins/imagesloaded.pkgd.min.js")} type="text/javascript"/>
      <script src={withPrefix("plugins/isotope.pkgd.min.js")} type="text/javascript"/>
      <script src={withPrefix("plugins/owl.carousel.min.js")} type="text/javascript"/>
      <script src={withPrefix("plugins/parallax.min.js")} type="text/javascript"/>
      <script src={withPrefix("js/script.min.js")} type="text/javascript"/>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
