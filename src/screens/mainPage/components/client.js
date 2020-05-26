import React from "react"
import Slider from "infinite-react-carousel"

export const Client = () => {
  const settings = {
    accessibility: false,
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 1000,
    centerPadding: 10,
    overScan: 1,
    pauseOnHover: false,
    swipe: false,
    virtualList: true,
  }
  return (
    <div
      id="client"
      className="client block-section bg-white padd-40-top padd-40-btm"
    >
      {/* <Slider autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider> */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <div
              id="slider-thumbnail"
              className="owl-carousel owl-theme client-slider slider-carousel navigation-hide"
            > */}
            <Slider { ...settings }>
              <div className="item">
                <a href="#">
                  <img src="../../../img-client-01.png" alt="client" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="../../../img-client-02.png" alt="client" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="../../../img-client-03.png" alt="client" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="../../../img-client-04.png" alt="client" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="../../../img-client-05.png" alt="client" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="../../../img-client-06.png" alt="client" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="../../../img-client-07.png" alt="client" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="../../../img-client-08.png" alt="client" />
                </a>
              </div>
            </Slider>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
