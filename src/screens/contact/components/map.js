/* eslint-disable */
import React from "react"
import GoogleMapReact from "google-map-react"
import styled from "styled-components"

const StyledMarker = styled.div`
  width: 45px;
  height: 45px;
  background: rgb(213, 49, 49);
  border-radius: 50%;
  text-align: center;
  line-height: 45px;
  border: 1px solid rgb(133, 133, 133);
  text-transform: uppercase;
  color: rgb(55, 52, 52);
  font-weight: 600;
`
const Marker = ({ lat, lng }) => <StyledMarker>Biuro</StyledMarker>

const Map = props => {
  const { options } = props
  console.log(props)
  const state = {
    center: {
      lat: 50.826633,
      lng: 19.117304,
    },
    zoom: 18,
  }

  const mapStyles = {}

  return (
    <div className="container-fluid container-no-padding">
      <div className="row row-no-margin">
        <div className="image-block-item col-md-5 col-sm-5 col-xs-12">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyA-3-zhqiE5BuSJ-Svm-UQf5bWzWCNt3lc",
            }}
            defaultCenter={state.center}
            defaultZoom={state.zoom}
            style={mapStyles}
            options={{
              styles: [
                {
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#f5f5f5",
                    },
                  ],
                },
                {
                  elementType: "labels.icon",
                  stylers: [
                    {
                      visibility: "off",
                    },
                  ],
                },
                {
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#616161",
                    },
                  ],
                },
                {
                  elementType: "labels.text.stroke",
                  stylers: [
                    {
                      color: "#f5f5f5",
                    },
                  ],
                },
                {
                  featureType: "administrative.land_parcel",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#bdbdbd",
                    },
                  ],
                },
                {
                  featureType: "poi",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#eeeeee",
                    },
                  ],
                },
                {
                  featureType: "poi",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#757575",
                    },
                  ],
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#e5e5e5",
                    },
                  ],
                },
                {
                  featureType: "poi.park",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#9e9e9e",
                    },
                  ],
                },
                {
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#ffffff",
                    },
                  ],
                },
                {
                  featureType: "road.arterial",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#757575",
                    },
                  ],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#dadada",
                    },
                  ],
                },
                {
                  featureType: "road.highway",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#616161",
                    },
                  ],
                },
                {
                  featureType: "road.local",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#9e9e9e",
                    },
                  ],
                },
                {
                  featureType: "transit.line",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#e5e5e5",
                    },
                  ],
                },
                {
                  featureType: "transit.station",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#eeeeee",
                    },
                  ],
                },
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#c9c9c9",
                    },
                  ],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#9e9e9e",
                    },
                  ],
                },
              ],
            }}
          >
            <Marker lat={state.center.lat} lng={state.center.lng} />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  )
}

export default Map
