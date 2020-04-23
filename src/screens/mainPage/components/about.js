import React from "react"

export const About = () => (
  <div id="about" className="block-section image-block bg-white">
    <div className="container-fluid container-no-padding">
      <div className="row row-no-margin">
        <div className="image-block-item col-md-6 col-sm-5 col-xs-12">
          <div
            className="image-block-item-background"
            style={{ backgroundImage: "url(../../../img-post-content-04.jpg)" }}
          ></div>
        </div>
      </div>
    </div>

    <div className="container clear">
      <div className="row">
        <div className="col-md-5 col-md-offset-7 col-sm-6 col-sm-offset-6 col-xs-10 col-xs-offset-1 padd-80-top padd-60-btm">
          <div className="section-title">
            <h2>Kim jesteśmy?</h2>
          </div>
          <p>
            Construction, Inc. traces its roots back to 2005 in Orange and since
            then have never looked back. With thousands of successful projects
            under our belt, we can proudly say that we are one.
          </p>
          <p>
            For more than 10 years, Construction has offered a wide range of
            construction services in Colorado, many other cities of United
            States and around the world. We strive to maintain.
            <br />
            We aim to eliminate the task of dividing your project between
            different architecture and construction company.
          </p>
          <p>
            <a
              className="button btn-danger popup-video"
              href="http://www.youtube.com/watch?v=Og879fOk6DQ"
            >
              <i className="fa fa-wrench"></i> Learn Our Service
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)
