import React, { useState, useEffect } from "react"

import MapGL, { Marker, Pin, Popup, CityInfo} from 'react-map-gl';


const SchoolsMap = () => {
    const MAPBOX_TOKEN = 'pk.eyJ1IjoibHVtamlhaHVpIiwiYSI6ImNrYTI0cXZvdTA4ajYzb21ldm44Y3NnYzYifQ.iuFO3bWaqabf8F25ZiSicA'

    const [viewport, setViewport] = useState({
          latitude: 20.8,
          longitude: 120.4,
          zoom: 2.3,
          bearing: 0,
          pitch: 0
        });
        
    const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
      c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
      C20.1,15.8,20.2,15.8,20.2,15.7z`;

      return(
    <MapGL
    {...viewport}
    width="100%"
    height="600px"
    mapStyle="mapbox://styles/lumjiahui/cka253xev5ze51io5508ulwuh"
    onViewportChange={nextViewport => setViewport(nextViewport)}
    mapboxApiAccessToken={MAPBOX_TOKEN}
    >
    <Marker longitude={103.7727} latitude={1.2907}>
    <svg
        height="20"
        viewBox="0 0 24 24"
        style={{
          cursor: 'pointer',
          fill: '#d00',
          stroke: 'none',
        }}
      >
        <path d={ICON} />
      </svg>  
      <Popup
        tipSize={100}
        anchor="top"
        longitude={104}
        latitude={1}
        closeOnClick={false}
       
      >
       a
      </Popup>
      </Marker>
      <Marker longitude={110.7727} latitude={1.2907}>
    <svg
        height="20"
        viewBox="0 0 24 24"
        style={{
          cursor: 'pointer',
          fill: '#d00',
          stroke: 'none',
        }}
      >
        <path d={ICON} />
      </svg>
      </Marker>
    </MapGL>

)
}

export default SchoolsMap
