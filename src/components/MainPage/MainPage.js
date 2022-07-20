import React, { useState } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const uoftMarker = [43.6609, -79.3959];
const sampleListingLoc = [43.65133, -79.39448];

const MainPage = () => {
  const [showPopup, setShowPopUp] = useState(false);

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
    >
      <Marker
        longitude={uoftMarker[1]}
        latitude={uoftMarker[0]}
        anchor="bottom"
        color="red"
      />

      <Marker
        longitude={sampleListingLoc[1]}
        latitude={sampleListingLoc[0]}
        color="orange"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setShowPopUp(true);
        }}
      />

      {/* Popup */}
      {showPopup && (
        <Popup
          longitude={sampleListingLoc[1]}
          latitude={sampleListingLoc[0]}
          anchor="top"
          onClose={() => setShowPopUp(false)}
        >
          You are here
        </Popup>
      )}

      {/* Controls */}
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
    </Map>
  );
};

export default MainPage;
