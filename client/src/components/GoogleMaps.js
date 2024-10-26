import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';

const GoogleMaps = () => {
  const [location, setLocation] = useState({ lat: 38.83058942111869, lng: -77.18825085234303 });
  const [loading, setLoading] = useState(false);
  const [address] = useState('4355 John Marr Dr, Annandale, VA 22003');

  useEffect(() => {
    // Simulating loading state, you can remove this if not needed
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  
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
          <Marker position={location} />
          <InfoWindow position={location}>
            <div style={{ fontSize: '12px', color: '#000000' }}>
              <h1>Gom Shabu</h1>
              <div>
                <p>{address}</p>
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
