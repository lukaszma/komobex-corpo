import React, { useState } from "react"
import classnames from "classnames"

const filters = [
  {
    title: "wszystkie",
    id: "all",
  },
  {
    title: "wentylacja i klimatyzacja",
    id: "wik",
  },
  {
    title: "instalacje elektryczne",
    id: "ie",
  },
  {
    title: "instalacje wod-kan",
    id: "iwk",
  },
  {
    title: "instalacje c.o.",
    id: "ico",
  },
]

export const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const onFilter = (e, id) => {
    e.preventDefault()
    setActiveFilter(id)
  }

  return (
    <div id="work" className="work content-section bg-grey">
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
              {filters.map(filter => (
                <li
                  key={filter.id}
                  className={classnames({ active: activeFilter === filter.id })}
                >
                  <a href="#" onClick={e => onFilter(e, filter.id)}>
                    {filter.title}
                  </a>
                </li>
              ))}
              {/* <li className="active" data-filter="*">
                <a href="#">Wszystkie</a>
              </li>
              <li data-filter=".wik">
                <a href="#">wentylacja i klimatyzacja</a>
              </li>
              <li data-filter=".ie">
                <a href="#">instalacje elektryczne</a>
              </li>
              <li data-filter=".iwk">
                <a href="#">instalacje wod-kan</a>
              </li>
              <li data-filter=".ico">
                <a href="#">instalacje c.o.</a>
              </li> */}
            </ul>

            <ul className="work-grid">
              <li className="work-item wik iwk">
                <a href="#" title="Arena Gliwice">
                  <div className="work-item-image">
                    <img
                      src="../../../hala-gliwice-1.jpg"
                      alt="Arena Gliwice"
                    />
                  </div>
                  <div className="work-item-info">
                    <h4 className="work-item-title">Arena Gliwice</h4>
                    <span className="work-item-desc">
                      Wentylacja i klimatyzacja
                    </span>
                    <br />
                    <span className="work-item-desc">Instalacje wod-kan</span>
                  </div>
                </a>
              </li>
              <li className="work-item wik iwk">
                <a href="#" title="Wroclavia">
                  <div className="work-item-image">
                    <img src="../../../wroclavia_2.jpg" alt="Wroclavia" />
                  </div>
                  <div className="work-item-info">
                    <h4 className="work-item-title">Wroclavia</h4>
                    <span className="work-item-desc">
                      Wentylacja i klimatyzacja
                    </span>
                    <br />
                    <span className="work-item-desc">Instalacje wod-kan</span>
                  </div>
                </a>
              </li>
              <li className="work-item ie">
                <a href="#" title="Edu Hostel">
                  <div className="work-item-image">
                    <img src="../../../img-work-03.jpg" alt="Edu Hostel" />
                  </div>
                  <div className="work-item-info">
                    <h4 className="work-item-title">Edu Hostel</h4>
                    <span className="work-item-desc">
                      Instalacje elektryczne
                    </span>
                  </div>
                </a>
              </li>
              <li className="work-item isolation ico iwk">
                <a href="#" title="Alan Home">
                  <div className="work-item-image">
                    <img src="../../../img-work-04.jpg" alt="Alan Home" />
                  </div>
                  <div className="work-item-info">
                    <h4 className="work-item-title">Alan Home</h4>
                    <span className="work-item-desc">Instalacje c.o.</span>
                    <br />
                    <span className="work-item-desc">Instalacje wod-kan</span>
                  </div>
                </a>
              </li>
              <li className="work-item interior-design ico">
                <a href="#" title="Jannet Home">
                  <div className="work-item-image">
                    <img src="../../../img-work-05.jpg" alt="Jannet Home" />
                  </div>
                  <div className="work-item-info">
                    <h4 className="work-item-title">Jannet Home</h4>
                    <span className="work-item-desc">Instalacje c.o.</span>
                  </div>
                </a>
              </li>
              <li className="work-item design ie iwk">
                <a href="#" title="Papa Ron's Restaurant">
                  <div className="work-item-image">
                    <img
                      src="../../../img-work-06.jpg"
                      alt="Papa Ron's Restaurant"
                    />
                  </div>
                  <div className="work-item-info">
                    <h4 className="work-item-title">
                      {"Papa Ron's Restaurant"}
                    </h4>
                    <span className="work-item-desc">Instalacje wod-kan</span>
                    <br />
                    <span className="work-item-desc">
                      Instalacje elektryczne
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
