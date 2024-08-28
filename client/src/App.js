import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';
import gomShabuTheme from './styles/theme'
import Home from './pages/Home';
import './App.css';

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />

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
