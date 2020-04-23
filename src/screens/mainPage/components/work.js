import React from "react"

export const Work = () => <div id="work" className="work content-section bg-grey">
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="section-title">
        <h2>Przykładowe realizacje</h2>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-12">
      <ul className="work-filter">
        <li className="active" data-filter="*"><a href="#">All works</a></li>
        <li data-filter=".buildings"><a href="#buildings">Buildings</a></li>
        <li data-filter=".interior-design"><a href="#interior-design">Interior Design</a></li>
        <li data-filter=".isolation"><a href="#isolation">Isolation</a></li>
        <li data-filter=".house-renovation"><a href="#house-renovation">House Renovation</a></li>
      </ul>

      <ul className="work-grid">
        <li className="work-item buildings">
          <a href="assets/img/img-work-01.jpg" title="Avenue Hotels" className="image-lightbox">
            <div className="work-item-image">
              <img src="../../../img-work-01.jpg" alt="Avenue Hotels"/>
            </div>
            <div className="work-item-info">
              <h4 className="work-item-title">Avenue Hotels</h4>
              <span className="work-item-desc">Buildings</span>
            </div>
          </a>
        </li>
        <li className="work-item interior-design">
          <a href="assets/img/img-work-02.jpg" title="Mark Bedroom" className="image-lightbox">
            <div className="work-item-image">
              <img src="../../../img-work-02.jpg" alt="Mark Bedroom"/>
            </div>
            <div className="work-item-info">
              <h4 className="work-item-title">Mark Bedroom</h4>
              <span className="work-item-desc">Interior Design</span>
            </div>
          </a>
        </li>
        <li className="work-item buildings">
          <a href="assets/img/img-work-03.jpg" title="Edu Hostel" className="image-lightbox">
            <div className="work-item-image">
              <img src="../../../img-work-03.jpg" alt="Edu Hostel"/>
            </div>
            <div className="work-item-info">
              <h4 className="work-item-title">Edu Hostel</h4>
              <span className="work-item-desc">Buildings</span>
            </div>
          </a>
        </li>
        <li className="work-item isolation house-renovation">
          <a href="assets/img/img-work-04.jpg" title="Alan Home" className="image-lightbox">
            <div className="work-item-image">
              <img src="../../../img-work-04.jpg" alt="Alan Home"/>
            </div>
            <div className="work-item-info">
              <h4 className="work-item-title">Alan Home</h4>
              <span className="work-item-desc">Isolation</span>
            </div>
          </a>
        </li>
        <li className="work-item interior-design house-renovation">
          <a href="assets/img/img-work-05.jpg" title="Jannet Home" className="image-lightbox">
            <div className="work-item-image">
              <img src="../../../img-work-05.jpg" alt="Jannet Home"/>
            </div>
            <div className="work-item-info">
              <h4 className="work-item-title">Jannet Home</h4>
              <span className="work-item-desc">House Renovation</span>
            </div>
          </a>
        </li>
        <li className="work-item design photography">
          <a href="assets/img/img-work-06.jpg" title="Papa Ron's Restaurant" className="image-lightbox">
            <div className="work-item-image">
              <img src="../../../img-work-06.jpg" alt="Papa Ron's Restaurant"/>
            </div>
            <div className="work-item-info">
              <h4 className="work-item-title">{"Papa Ron's Restaurant"}</h4>
              <span className="work-item-desc">Interior Design</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>