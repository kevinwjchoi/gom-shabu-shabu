import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';

const GoogleMaps = ({ address }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const markerOffset = location ? {
    lat: location.lat - 0.00021, // Offset latitude
    lng: location.lng // Keep the longitude the same
  } : null;

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch(`/api/gom-shabu-search`);
        const data = await response.json();
        
        if (data.status === 'OK') {
          // Assuming you want the first result's location
          const result = data.results[0];
          setLocation({
            lat: result.geometry.location.lat,
            lng: result.geometry.location.lng,
          });
        } else {
          console.error('Error fetching location:', data.error_message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocationData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} // Optional: Use it only for Map styling, not for the search
      >
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          zoom={18}
          center={location}
        >
          {markerOffset && <Marker position={markerOffset} />}
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
