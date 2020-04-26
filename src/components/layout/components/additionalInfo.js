import React from "react"
import { Location } from "@reach/router"
import classnames from "classnames"

const AdditionalInfo = () => (
  <Location>
    {({ location }) => {
      const routes = location.pathname.split("/")
      const currentRoute = routes[routes.length - 1]
      const isTheme = "kontakt" === currentRoute

      return (
        <div
          id="additional-info"
          className={classnames(
            "additional-info block-section bg-grey padd-20-top padd-40-btm",
            isTheme ? "bg-theme" : "bg-grey"
          )}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <h4 className="contact-item-title">Telefon:</h4>
                  <div className="contact-item-info">+48 34 322 65 11</div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <i className="fa fa-envelope-o"></i>
                  </div>
                  <h4 className="contact-item-title">E-mail:</h4>
                  <div className="contact-item-info">komobexinel@post.pl</div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <h4 className="contact-item-title">Adres:</h4>
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
                  <h4 className="contact-item-title">
                    Godziny otwarcia biura:
                  </h4>
                  <div className="contact-item-info">Pn - Pt: 7.00 - 15:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </Location>
)

export default AdditionalInfo
