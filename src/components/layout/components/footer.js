import React from "react"
import CustomLink from "@components/customLink/customLink"

const Footer = () => (
  <footer id="colophon" className="site-footer bg-black" role="contentinfo">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <section className="widget">
            <img
              src="../../../komobex-logo.jpg"
              alt="bootstrap theme for construction companies"
              className="img-responsive marg-20-btm marg-20-top"
            />
            <p>
              Wiedzę oraz technologię doskonalimy już od ponad 25 lat wykonując
              projekty na terenie całego kraju, zdobywając tym samym zaufanie
              naszych Klientów.
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
              <li>
                <CustomLink to="/uslugi">Usługi</CustomLink>
              </li>
              <li>
                <CustomLink to="/realizacje">Realizacje</CustomLink>
              </li>
              <li>
                <CustomLink to="/kontakt">Kontakt</CustomLink>
              </li>
            </ul>
          </section>
        </div>

        <div className="col-md-3 col-sm-6">
          <section className="widget">
            <h3 className="widget-title">Nasze usługi</h3>
            <ul>
              <li>
                <CustomLink to="/uslugi/instalacje-sanitarne-zewnetrzne">
                  Instalacje sanitarne zewnętrzne
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
        </div>

        <div className="col-md-3 col-sm-6">
          <section className="widget">
            <h3 className="widget-title">Skontaktuj się z nami</h3>
            <p>Dekabrystów 41 42-200 Częstochowa</p>
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

export default Footer
