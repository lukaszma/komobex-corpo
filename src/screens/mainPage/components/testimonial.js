import React from "react"

export const Testimonial = () => (
  <div id="testimonial" className="block-section image-block bg-light">
    <div className="container-fluid container-no-padding">
      <div className="row row-no-margin">
        <div className="image-block-item col-md-6 col-md-offset-6 col-sm-5 col-xs-12">
          <div
            className="image-block-item-background"
            style={{ backgroundImage: "url('../../../img-content-03.jpg')" }}
          ></div>
        </div>
      </div>
    </div>

    <div className="container clear">
      <div className="row">
        <div className="col-md-5 col-md-offset-0 col-sm-7 col-sm-offset-5 padd-60-top padd-100-btm">
          <div className="section-title">
            <h2>Rekomendacje</h2>
          </div>
          <div
            className="carousel slide testimony-dark"
            id="testimony"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#testimony"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#testimony" data-slide-to="1" className=""></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <p>
                  Recently we had to redesign our landing page and were looking
                  for a template that fit our needs. We found this template
                  which far exceeded our expectations
                </p>
                <img
                  className="testimony-item-image"
                  src="../../../img-testimony-01.jpg"
                  alt=""
                />
                <span className="testimony-item-source source-alt">
                  <strong>David Groot</strong> Shark Inc.
                </span>
              </div>
              <div className="item">
                <p>
                  I {"don't"} know what else to say. It had everything we wanted and
                  was better designed than anything we could have accomplished
                  on our own. Thanks for the great work.
                </p>
                <img
                  className="testimony-item-image"
                  src="../../../img-testimony-02.jpg"
                  alt=""
                />
                <span className="testimony-item-source source-alt">
                  <strong>Max Well</strong> Cooldad
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
