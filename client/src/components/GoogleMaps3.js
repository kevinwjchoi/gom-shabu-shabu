import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';

const restaurantLocation = {
  lat: 38.84112754965021,
  lng: -77.1909439525429
};

const GoogleMaps = () => {
  const [restaurantAddress, setRestaurantAddress] = useState('');
  console.log("this is before")
  console.log(restaurantAddress)

  // Async function to fetch the restaurant address
  const fetchRestaurantAddress = async () => {
    try {
      const response = await fetch('/api/gom-shabu-details');
      const data = await response.json();
      console.log(data)

      // Check if data contains the expected result
      if (data.result) {
        const place = data.result;
        let address = place.formatted_address;

        // Remove ", USA" from the end of the address
        address = address.replace(/, USA$/, '');

        setRestaurantAddress(address);
      } else {
        console.error('No results found.');
      }
    } catch (error) {
      console.error('Error fetching place data:', error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchRestaurantAddress();
  }, []);

  console.log(restaurantAddress)
  console.log(restaurantLocation)

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          zoom={15}
          center={restaurantLocation}
        >
          <InfoWindow position={restaurantLocation}>
            <div style={{ fontSize: '16px', color: '#000' }}>
              <h2>Gom Shabu</h2>
              <div>
                <p>{restaurantAddress || 'Loading address...'}</p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(restaurantAddress)}`}
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
