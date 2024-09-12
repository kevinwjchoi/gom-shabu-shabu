import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// Define container style
const containerStyle = {
  width: '100%',
  height: '400px'
};

const Location = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [restaurantLocation, setRestaurantLocation] = useState(null);
  const [error, setError] = useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        if (navigator.geolocation) {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        } else {
          setError('Geolocation is not supported by this browser.');
        }
      } catch (err) {
        setError('Failed to retrieve location');
      }
    };

    const fetchRestaurantLocation = async () => {
      try {
        const response = await fetch('/api/place-search?query=Tous%20les%20Jours%20Bakery%20%26%20Cafe');
        if (!response.ok) {
          throw new Error('Failed to fetch restaurant location');
        }
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const location = data.results[0].geometry.location;
          setRestaurantLocation({
            lat: location.lat,
            lng: location.lng
          });
        } else {
          setError('No restaurant found');
        }
      } catch (err) {
        setError('Failed to fetch restaurant location');
      }
    };

    fetchUserLocation();
    fetchRestaurantLocation();
  }, []);

  const handleMarkerClick = () => {
    setInfoWindowOpen(true); // Ensure InfoWindow opens when the marker is clicked
    if (userLocation && restaurantLocation) {
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${restaurantLocation.lat},${restaurantLocation.lng}`;
      window.open(directionsUrl, '_blank');
    } else {
      setError('User or restaurant location is not available.');
    }
  };

  if (!restaurantLocation) return <p>Loading...</p>;

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={restaurantLocation}
        zoom={15}
      >
        {restaurantLocation && (
          <Marker
            position={restaurantLocation}
            onClick={handleMarkerClick}
          >
            {infoWindowOpen && (
              <InfoWindow
                position={restaurantLocation}
                onCloseClick={() => setInfoWindowOpen(false)}
              >
                <div>
                  <h2>Tous les Jours Bakery & Cafe</h2>
                  <p>4243 John Marr Dr<br />Annandale, VA 22003</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${restaurantLocation.lat},${restaurantLocation.lng}`} target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                  </a>
                </div>
              </InfoWindow>
            )}
          </Marker>
        )}
      </GoogleMap>
      {error && <p>{error}</p>}
    </LoadScript>
  );
};

export default Location;
