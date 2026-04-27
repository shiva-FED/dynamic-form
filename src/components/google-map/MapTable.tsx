import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import { Location, locationsData, center } from "./locations.tsx"

function MapTable() {
  const [selectedLocation, setSelectedLocation] = useState<Location[]>([]);

    const containerStyle = {
        width: "100%",
        height: "400px",
    };

  const onMarkerClick = (location: Location) => {
    setSelectedLocation((prev) => [...prev, location]);
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyC1JfeA8UW-A9khVaNSfebkBf6-pYqjQMk">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
          {locationsData.map((loc) => (
            <Marker
              key={loc.id}
              position={{ lat: loc.lat, lng: loc.lng }}
              onClick={() => onMarkerClick(loc)}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      <div style={{ marginTop: "20px", width: "75%", margin: "auto", }}>
        <h3>Location Details</h3>

        <table border={1} style={{ width: "100%", borderCollapse: "collapse", textAlign:"center" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>

          <tbody>
            {selectedLocation.length > 0 ? (
              selectedLocation.map((location) => (
                <tr key={location.id}>
                  <td>{location.id}</td>
                  <td>{location.name}</td>
                  <td>{location.lat}</td>
                  <td>{location.lng}</td>
                </tr>
              ))
              
            ) : (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  Click a marker to see details
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MapTable;