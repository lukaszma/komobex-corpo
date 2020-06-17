import React from "react"

export const Form = () => (
  <div className="container clear">
    <div className="row">
      <div className="col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 col-xs-10 col-xs-offset-1 padd-20-top padd-60-btm">
        <form className="contact-form">
          <p style={{ minHeight: "94px" }}>
            Aby poprosić o wycenę lub zadać ogólne pytania dotyczące naszych
            usług, zadzwoń lub prześlij do nas zapytanie drogą elektroniczną.
            Czekamy na Ciebie!
          </p>
          {/* <div className="form-group">
            <label htmlFor="contact_name">Imię i Nazwisko / Firma</label>
            <input
              type="text"
              className="form-control form-bordered"
              id="contact_name"
            />
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="contact_email" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control form-bordered"
                  id="contact_email"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="contact_email" className="form-label">
                  Numer telefonu
                </label>
                <input
                  type="email"
                  className="form-control form-bordered"
                  id="contact_email"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact_subject">Temat</label>
            <input
              type="text"
              className="form-control form-bordered"
              id="contact_subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact_message" className="form-label">
              Treść wiadomości
            </label>
            <textarea
              className="form-control form-bordered"
              rows={6}
              id="contact_message"
            ></textarea>
          </div>
          <button type="submit" className="button btn-square">
            Wyślij
          </button> */}
        </form>
      </div>
    </div>
  </div>
)
