import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MainPage = () => {
  const [viewState, setViewState] = useState({
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 10,
  });

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/louispat/cl5kdqe1v003c15pbc4f2v4uu"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    ></Map>
  );
};

export default MainPage;
