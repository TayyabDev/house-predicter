import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewport] = useState({
    width: 1118,
    height: 478,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken='pk.eyJ1IjoidGF5eWFiZGV2IiwiYSI6ImNrN2M0NW13ODBoMnIzbHFoYmR1Y2ZjdDYifQ.jNx0hMccnFqRtzvck4PLJQ'
    />
  );
}

export default Map