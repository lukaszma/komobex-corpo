import React from "react"
import CustomLink from "@components/customLink/customLink"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Image = styled(Img)`
  margin-bottom: 30px;
`

const Footer = () => {
  const images = useStaticQuery(graphql`
    query {
      logo: file(
        sourceInstanceName: { eq: "main-page-images" }
        name: { eq: "logo" }
      ) {
        name
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <footer id="colophon" className="site-footer bg-black" role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <section className="widget">
              <CustomLink to="/">
                <Image
                  className="img-responsive"
                  fluid={images.logo.childImageSharp.fluid}
                />
              </CustomLink>
              <p>
                Wiedzę oraz technologię doskonalimy już od ponad 29 lat
                wykonując projekty na terenie całego kraju, zdobywając tym samym
                zaufanie naszych Klientów.
              </p>
            </section>
          </div>

          <div className="col-md-2 col-sm-6 col-md-offset-1 col-sm-offset-0">
            <section className="widget">
              <h3 className="widget-title">Komobex Inel</h3>
              <ul>
                <li>
                  <CustomLink to="/o-firmie">O firmie</CustomLink>
                </li>
                {/* <li>
                  <CustomLink to="/uslugi">Usługi</CustomLink>
                </li> */}
                <li>
                  <CustomLink to="/realizacje">Realizacje</CustomLink>
                </li>
                <li>
                  <CustomLink to="/referencje">Referencje</CustomLink>
                </li>
                <li>
                  <CustomLink to="/nieruchomosci">Nieruchomości</CustomLink>
                </li>
                <li>
                  <CustomLink to="/kontakt">Kontakt</CustomLink>
                </li>
              </ul>
            </section>
          </div>

          {/* <div className="col-md-3 col-sm-6">
            <section className="widget">
              <h3 className="widget-title">Nasze usługi</h3>
              <ul>
                <li>
                  <CustomLink to="/uslugi/instalacje-sanitarne-zewnetrzne">
                    Instalacje i sieci zewnętrzne
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="/uslugi/instalacje-sanitarne-wewnetrzne">
                    Instalacje sanitarne wewnętrzne
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="/uslugi/instalacje-przemyslowe">
                    Instalacje przemysłowe
                  </CustomLink>
                </li>

                <li>
                  <CustomLink to="/uslugi/uslugi-dzwigowe">
                    Usługi dźwigowe
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="/uslugi/wynajem-mieszkan">
                    Wynajem mieszkań
                  </CustomLink>
                </li>
              </ul>
            </section>
          </div> */}

          <div className="col-md-3 col-sm-6">
            <section className="widget">
              <h3 className="widget-title">Skontaktuj się z nami</h3>
              <p>Srebrna 61/63 42-200 Częstochowa</p>
              <p>
                komobexinel@post.pl
                <br />
                +48 34 322 65 11
              </p>
            </section>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
