import React from "react"
import { Link } from "gatsby"

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
                <Link to="/o-firmie">O firmie</Link>
              </li>
              <li>
                <a href="#">Usługi</a>
              </li>
              <li>
                <a href="#">Realizacje</a>
              </li>
              <li>
              <Link to="/kontakt">Kontakt</Link>
              </li>
              <li>
                <a href="#">Kariera</a>
              </li>
            </ul>
          </section>
        </div>

        <div className="col-md-3 col-sm-6">
          <section className="widget">
            <h3 className="widget-title">Nasze usługi</h3>
            <ul>
              <li>
                <a href="#">Instalacje wod-kan</a>
              </li>
              <li>
                <a href="#">Instalacje wentylacyjne i klimatyzacyjne</a>
              </li>
              <li>
                <a href="#">Instalacje c.o</a>
              </li>
              <li>
                <a href="#">Instalacje elektryczne</a>
              </li>
              <li>
                <a href="#">Usługi dźwigowe</a>
              </li>
              <li>
                <a href="#">Wynajem mieszkań</a>
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
