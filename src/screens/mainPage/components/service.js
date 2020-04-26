import React from "react"

export const Service = () => (
  <div id="service" className="service content-section bg-white">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="blog-entry">
            <a href="#" className="blog-entry-thumbnail">
            {/* https://www.google.com/search?q=instalacje+wod+kan&sxsrf=ALeKk02biDAXqNFw0jYFTjedUDydi8vRMg:1587814130418&source=lnms&tbm=isch&sa=X&ved=2ahUKEwipztnJvIPpAhXU4KYKHe_pC7EQ_AUoAXoECA4QAw&biw=1920&bih=920#imgrc=c61ux9afl1NdpM */}
              <img
                src="../../../plumbing.jpg"
                alt="metal roofting"
                className="img-responsive"
              />
            </a>
            <div className="blog-entry-header">
              <h2 className="entry-title">
                <a href="#" rel="bookmark">
                  Instalacje wodno-kanalizacyjne
                </a>
              </h2>
            </div>
            <div className="blog-entry-content">
              <p>
                Oferujemy instalacje sieci zewnętrznych wodociągowych, deszczowych, sanitarnych i ciepłowniczych
              </p>
              <p>
                <a href="#" className="read-more">
                  Czytaj więcej &#43;
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="blog-entry">
            <a href="#" className="blog-entry-thumbnail">
              <img
                src="../../../air-condition.jpg"
                alt="green building"
                className="img-responsive"
              />
            </a>
            <div className="blog-entry-header">
              <h2 className="entry-title">
                <a href="#" rel="bookmark">
                  Instalacje wentylacyjne i klimatyzacyjne
                </a>
              </h2>
            </div>
            <div className="blog-entry-content">
              <p>
                Świadczymy usługi w instalacjach wentylacyjnych i klimatyzacyjnych dla obiektów przemysłowych
              </p>
              <p>
                <a href="#" className="read-more">
                  Czytaj więcej &#43;
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <ul className="blog-entry-list">
            <li>
              <span className="entry-post-thumbnail">
                <img
                  src="../../../img-service-03.jpg"
                  alt="construction Consultant"
                />
              </span>
              <div className="entry-post-content">
                <h4 className="entry-post-title">
                  <a href="#">Instalacje centralnego ogrzewania</a>
                </h4>
                <p>
                  Process of Consultation Whether you know exactly how you ...
                </p>
              </div>
            </li>
            <li>
              <span className="entry-post-thumbnail">
                <img
                  src="../../../img-service-04.jpg"
                  alt="General Contracting"
                />
              </span>
              <div className="entry-post-content">
                <h4 className="entry-post-title">
                  <a href="#">Instalacje elektryczne</a>
                </h4>
                <p>
                  Construction With a reputation built on offering superior ...
                </p>
              </div>
            </li>
            <li>
              <span className="entry-post-thumbnail">
                <img
                  src="../../../img-service-03.jpg"
                  alt="Construction Management"
                />
              </span>
              <div className="entry-post-content">
                <h4 className="entry-post-title">
                  <a href="#">Usługi dźwigowe</a>
                </h4>
                <p>
                  We offer commitment at all levels of building project, from
                  preparing ...
                </p>
              </div>
            </li>
            <li>
              <span className="entry-post-thumbnail">
                <img src="../../../img-service-06.jpg" alt="House Renovation" />
              </span>
              <div className="entry-post-content">
                <h4 className="entry-post-title">
                  <a href="#">Wynajem mieszkań</a>
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
