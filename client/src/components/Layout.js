import React, { useState , useEffect} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../styles/Layout.css';

const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

  
  
    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setDrawerOpen(open);
    };
  
  
  
    return (
      <div className="background-container">
        {(
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component={Link} to="/home" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                Gom Shabu
              </Typography>
                  <Button color="inherit" component={Link} to="/home">
                    Home
                  </Button>
            </Toolbar>
          </AppBar>
        )}
        {/* Drawer */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: 270, 
            },
          }}
        >
          <List>
            {/* <ListItem className="drawer-link" component={Link} to="/restaurants" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Restaurants" />
            </ListItem> */}

          </List>
        </Drawer>
  
        <main style={{ padding: '16px 5% 50px 7%' }}>
          {children}
        </main>
      </div>
    );
  };
  
  export default Layout;