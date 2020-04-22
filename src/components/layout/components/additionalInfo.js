import React from "react"

const AdditionalInfo = () => (
  <div
    id="additional-info"
    className="additional-info block-section bg-grey padd-20-top padd-40-btm"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="fa fa-phone"></i>
            </div>
            <h4 className="contact-item-title">Numer telefonu:</h4>
            <div className="contact-item-info">+48 34 322 65 11</div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="fa fa-envelope-o"></i>
            </div>
            <h4 className="contact-item-title">Adres e-mail:</h4>
            <div className="contact-item-info">komobexinel@post.pl</div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <h4 className="contact-item-title">Lokalizacja biura:</h4>
            <div className="contact-item-info">
              Częstochowa ul. Dekabrystów 41
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="fa fa-clock-o"></i>
            </div>
            <h4 className="contact-item-title">Godziny otwarcia biura:</h4>
            <div className="contact-item-info">Pn - Pt: 7.00 - 15:00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AdditionalInfo
