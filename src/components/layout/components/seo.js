import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, pageTitle }) {
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
      title={`Komobex-Inel${pageTitle?.length ? ` - ${pageTitle}` : ""}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
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
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700&display=swap"
        rel="stylesheet"
      ></link>
      {/* <script src={withPrefix("plugins/jquery.min.js")} type="text/javascript"/> */}
      {/* <script src={withPrefix("bootstrap/js/bootstrap.min.js")} type="text/javascript"/> */}
      {/* <script src={withPrefix("js/navigation.js")} type="text/javascript"/> */}
      {/* <script src={withPrefix("plugins/jquery.easing.js")} type="text/javascript"/> */}
      {/* <script src={withPrefix("plugins/jquery.magnific-popup.min.js")} type="text/javascript"/> */}
      {/* <script src={withPrefix("plugins/imagesloaded.pkgd.min.js")} type="text/javascript"/> */}
      {/* <script src={withPrefix("plugins/isotope.pkgd.min.js")} type="text/javascript"/> */}
      {/* <script src={withPrefix("plugins/owl.carousel.min.js")} type="text/javascript"/> */}
      {/* <script src={withPrefix("plugins/parallax.min.js")} type="text/javascript"/> */}
      {/* <script src={withPrefix("js/script.min.js")} type="text/javascript"/> */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Organization",
          name: "P.P.H. Komobex-Inel Sp. z o.o.",
          image: "https://www.komobexinel.pl/logo.png",
          telephone: "34 322 65 11",
          email: "komobexinel@post.pl",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Srebrna 61/63",
            addressLocality: "Częstochowa",
            addressCountry: "Polska",
            postalCode: "42-200",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            opens: "07:00",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            closes: "15:00",
            name: "Godziny otwarcia biura",
            "@id": "https://www.komobexinel.pl/kontakt",
          },
          url: "https://www.komobexinel.pl/",
          geo: {
            "@type": "GeoCoordinates",
            longitude: "19.16164",
            latitude: "50.82191",
            name: "Częstochowa",
            "@id": "https://www.komobexinel.pl/kontakt",
          },
        })}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  pageTitle: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string.isRequired,
}

export default SEO
