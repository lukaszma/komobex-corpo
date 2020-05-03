import React from "react"
import { CardsWrapper } from "./styles"
import { Card } from "./components"
import CustomLink from "@components/customLink/customLink"
// import { Card } from "./components"

const Cards = () => (
  <CardsWrapper>
    <div className="container">
      <div className="row">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(item => (
          <div key={item} className="card-col col-xs-12 col-sm-6 col-md-4">
            <CustomLink to="/realizacje/arena-gliwice">
              <Card />
            </CustomLink>
          </div>
        ))}
        {/* <Card /> */}
      </div>
    </div>
  </CardsWrapper>
)

export default Cards
