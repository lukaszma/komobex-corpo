import React, { useRef } from "react"
import { Map as LeafletMap, TileLayer, Marker } from "react-leaflet"
import styled from "styled-components"

const StyledMap = styled.div`
  .leaflet-tile-pane {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
`

const Map = () => {
  const mapRef = useRef()
  return (
    <div className="container-fluid container-no-padding">
      <div className="row row-no-margin">
        <StyledMap
          style={{ height: "243px" }}
          ref={mapRef}
          className="image-block-item col-md-5 col-sm-5 col-xs-12"
        >
          {typeof window !== "undefined" && (
            <LeafletMap
              center={[50.821955, 19.161112]}
              zoom={16}
              style={{ height: "100%" }}
            >
              <Marker position={[50.821955, 19.161112]} />
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LeafletMap>
          )}
        </StyledMap>
      </div>
    </div>
  )
}

export default Map
