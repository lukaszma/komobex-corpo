import React from "react"

export const Facts = () => (
  <div id="facts" className="facts content-section bg-theme">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="fact-item">
            <span className="fact-item-number">
              <span className="pe-7s-alarm icon"></span>
              <span className="number number-alt">25+</span>
            </span>
            <h5 className="fact-item-info">Lat doświadczenia</h5>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="fact-item">
            <span className="fact-item-number">
              <span className="pe-7s-medal icon"></span>
              <span className="number">16</span>
            </span>
            <h5 className="fact-item-info">Nagród</h5>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="fact-item">
            <span className="fact-item-number">
              <span className="pe-7s-tools icon"></span>
              <span className="number">549</span>
            </span>
            <h5 className="fact-item-info">Ukończonych realizacji</h5>
          </div>
        </div>

        <div className="col-md-3 col-sm-6"> 
          <div className="fact-item">
            <span className="fact-item-number">
              <span className="pe-7s-like2 icon"></span>
              <span className="number">183</span>
            </span>
            <h5 className="fact-item-info">Zadowolonych klientów</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
)
