import React from 'react';
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';

const GoogleMaps = ({ address, location }) => {
    const markerOffset = {
        lat: location.lat - 0.00021, // Offset latitude
        lng: location.lng // Keep the longitude the same
      };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          zoom={18}
          center={location}
        >
        <Marker position={markerOffset} />
          <InfoWindow position={location}>
            <div style={{ fontSize: '12px', color: '#000000' }}>
              <h1>Gom Shabu</h1>
              <div>
                <p>{address || 'Loading address...'}</p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1a73e8' }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </InfoWindow>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMaps;
