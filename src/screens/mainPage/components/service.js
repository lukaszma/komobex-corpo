import React from "react"
import CustomLink from "@components/customLink/customLink"

export const Service = () => (
  <div id="service" className="service content-section bg-white">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="blog-entry">
            <CustomLink to="/uslugi/instalacje-wodno-kanalizacyjne">
              {/* https://www.google.com/search?q=instalacje+wod+kan&sxsrf=ALeKk02biDAXqNFw0jYFTjedUDydi8vRMg:1587814130418&source=lnms&tbm=isch&sa=X&ved=2ahUKEwipztnJvIPpAhXU4KYKHe_pC7EQ_AUoAXoECA4QAw&biw=1920&bih=920#imgrc=c61ux9afl1NdpM */}
              <img
                src="../../../plumbing.jpg"
                alt="metal roofting"
                className="img-responsive"
              />
            </CustomLink>
            <div className="blog-entry-header">
              <h2 className="entry-title">
                <CustomLink to="/uslugi/instalacje-wodno-kanalizacyjne">
                  Instalacje wodno-kanalizacyjne
                </CustomLink>
              </h2>
            </div>
            <div className="blog-entry-content">
              <p>
                Oferujemy instalacje sieci zewnętrznych wodociągowych,
                deszczowych, sanitarnych i ciepłowniczych
              </p>
              <p>
                <CustomLink to="/uslugi/instalacje-wodno-kanalizacyjne">
                  Czytaj więcej &#43;
                </CustomLink>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="blog-entry">
          <CustomLink to="/uslugi/instalacje-wentylacyjne-i-klimatyzacyjne">
              <img
                src="../../../mainPage/IMG_20190329_151253 — kopia.jpg"
                alt="green building"
                className="img-responsive"
              />
            </CustomLink>
            <div className="blog-entry-header">
              <h2 className="entry-title">
                <CustomLink to="/uslugi/instalacje-wentylacyjne-i-klimatyzacyjne">
                  Instalacje wentylacyjne i klimatyzacyjne
                </CustomLink>
              </h2>
            </div>
            <div className="blog-entry-content">
              <p>
                Świadczymy usługi w instalacjach wentylacyjnych i
                klimatyzacyjnych dla obiektów przemysłowych
              </p>
              <p>
                <CustomLink to="/uslugi/instalacje-wentylacyjne-i-klimatyzacyjne">
                  Czytaj więcej &#43;
                </CustomLink>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <ul className="blog-entry-list">
            <li>
              <span className="entry-post-thumbnail">
                <img
                  src="https://cdn.pixabay.com/photo/2014/09/27/16/59/heating-463904_960_720.jpg"
                  alt="construction Consultant"
                />
              </span>
              <div className="entry-post-content">
                <h4 className="entry-post-title">
                  <CustomLink to="/uslugi/instalacje-co">
                    Instalacje centralnego ogrzewania
                  </CustomLink>
                </h4>
                <p>
                  Process of Consultation Whether you know exactly how you ...
                </p>
              </div>
            </li>
            <li>
              <span className="entry-post-thumbnail">
                <img
                  src="https://cdn.pixabay.com/photo/2019/11/06/10/26/cable-4605760_960_720.jpg"
                  alt="General Contracting"
                />
              </span>
              <div className="entry-post-content">
                <h4 className="entry-post-title">
                  <CustomLink to="/uslugi/instalacje-elektryczne">
                    Instalacje elektryczne
                  </CustomLink>
                </h4>
                <p>
                  Construction With a reputation built on offering superior ...
                </p>
              </div>
            </li>
            <li>
              <span className="entry-post-thumbnail">
                <img
                  src="../../../mainPage/baukran-3703469_1920.jpg"
                  alt="Construction Management"
                />
              </span>
              <div className="entry-post-content">
                <h4 className="entry-post-title">
                  <CustomLink to="/uslugi/uslugi-dzwigowe">
                    Usługi dźwigowe
                  </CustomLink>
                </h4>
                <p>
                  We offer commitment at all levels of building project, from
                  preparing ...
                </p>
              </div>
            </li>
            <li>
              <span className="entry-post-thumbnail">
                <img
                  src="../../../mainPage/apartment-chair-clean-contemporary-279719.jpg"
                  alt="House Renovation"
                />
              </span>
              <div className="entry-post-content">
                <h4 className="entry-post-title">
                  <CustomLink to="/uslugi/wynajem-mieszkan">
                    Wynajem mieszkań
                  </CustomLink>
                </h4>
                <p>
                  Interior There are a number of great reasons to makeover ...
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
