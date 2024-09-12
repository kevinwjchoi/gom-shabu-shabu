import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';
import gomShabuTheme from './styles/theme'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import Location from './pages/Location';

import './App.css';
import './styles/Layout.css'


const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/locations" element={<Location />} />

    </Routes>
  );
};

function App() {

  return (
            <ThemeProvider theme={gomShabuTheme}>
              <Router>
                  <Layout>
                    <AppRoutes />
                  </Layout>
              </Router>
            </ThemeProvider>
  );
}

export default App;
