import React from "react"
import styled from "styled-components"

const StyledMap = styled.div`
  iframe {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    border: 0;
    width: 100%;
    height: 100%;
  }
`

const Map = () => {
  return (
    <div className="container-fluid container-no-padding">
      <div className="row row-no-margin">
        <StyledMap
          style={{ height: "243px" }}
          className="image-block-item col-md-5 col-sm-5 col-xs-12"
        >
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=19.1536%2C50.8159%2C19.1697%2C50.8279&layer=mapnik&marker=50.82191%2C19.16164"
            title="Mapa - Komobex Inel"
          />
        </StyledMap>
      </div>
    </div>
  )
}

export default Map
