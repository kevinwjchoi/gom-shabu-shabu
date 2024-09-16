import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';
import gomShabuTheme from './styles/theme';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import Location from './pages/Location';

import './App.css';
import './styles/Layout.css';

const AppRoutes = ({ restaurantAddress, restaurantLocation , fetchRestaurantAddress}) => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route 
        path="/locations" 
        element={<Location address={restaurantAddress} location={restaurantLocation} fetchRestaurantAddress={fetchRestaurantAddress} />} 
      />
    </Routes>
  );
};

function App() {
  const [restaurantAddress, setRestaurantAddress] = useState('4355 John Marr Dr, Annandale, VA 22003, USA');
  const restaurantLocation = {
    lat: 38.8305543,
    lng: -77.188311
  };

  // Async function to fetch the restaurant address
  const fetchRestaurantAddress = async () => {
    try {
      const response = await fetch('/api/gom-shabu-details');
      const data = await response.json();

      // Check if data contains the expected result
      if (data.result) {
        let address = data.result.formatted_address;
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

  return (
    <ThemeProvider theme={gomShabuTheme}>
      <Router>
        <Layout>
          <AppRoutes 
            restaurantAddress={restaurantAddress} 
            restaurantLocation={restaurantLocation} 
            fetchRestaurantAddress={fetchRestaurantAddress}
          />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
