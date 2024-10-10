import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'; // Import CssBaseline
import Layout from './components/Layout';
import gomShabuTheme from './styles/theme';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import Location from './pages/Location';
import Events from './pages/Events';
import './App.css';
import './styles/Layout.css';

const AppRoutes = ({ restaurantAddress, restaurantLocation, fetchRestaurantAddress }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route 
        path="/locations" 
        element={<Location address={restaurantAddress} location={restaurantLocation} fetchRestaurantAddress={fetchRestaurantAddress} />} 
      />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
};

function App() {
  const [restaurantAddress, setRestaurantAddress] = useState('4355 John Marr Dr, Annandale, VA 22003, USA');
  const restaurantLocation = {
    lat: 38.8305543,
    lng: -77.188311
  };
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchRestaurantAddress = async () => {
    try {
      const response = await fetch('/api/gom-shabu-details');
      const data = await response.json();

      if (data.result) {
        let address = data.result.formatted_address.replace(/, USA$/, '');
        setRestaurantAddress(address);
      } else {
        console.error('No results found.');
      }
    } catch (error) {
      console.error('Error fetching place data:', error);
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  useEffect(() => {
    fetchRestaurantAddress();
  }, []);

  return (
    <ThemeProvider theme={gomShabuTheme}>
      <CssBaseline /> {/* Add CssBaseline here */}
      <Router>
        <Layout>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <AppRoutes 
              restaurantAddress={restaurantAddress} 
              restaurantLocation={restaurantLocation} 
              fetchRestaurantAddress={fetchRestaurantAddress}
            />
          )}
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
