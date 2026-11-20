import React from "react";
import GoogleMapReact from "google-map-react";
import "./contact.css";

import { FaMapMarkerAlt } from "react-icons/fa";

const SimpleMap = ({ location, zoomLevel }) => {
  return (
    <div className="google-map">
      <address>
        <h2>380 Rector Pl #21e</h2>
        <p>380 Rector Pl #21e, New York, NY 10280</p>
        <a href="https://www.google.com/maps?ll=40.709119,-74.017925&z=16&t=m&hl=en&gl=US&mapclient=embed&q=380+Rector+Pl+%2321e+New+York,+NY+10280">View larger map</a>
      </address>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <FaMapMarkerAlt
          className="map-marker"
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
