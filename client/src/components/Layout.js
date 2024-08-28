import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, Box, Grid, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramLogo from '../images/instagram.svg';
import YelpLogo from '../images/yelp.svg';
import { Link } from 'react-router-dom';
import '../styles/Layout.css';
import logo1 from '../images/logo1.jpeg';

const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <div className="background-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <AppBar position="static" sx={{ height: 90, backgroundColor: 'black' }}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ mr: 4 }}>
                        <MenuIcon />
                    </IconButton>
                    <Link to="/home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Box component="img" src={logo1} alt="Gom Shabu" sx={{ height: 50, mr: 2 }} />
                    </Link>
                    <Button color="inherit" component={Link} to="/home">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/about">
                        About Us
                    </Button>
                    <Button color="inherit" component={Link} to="/menu">
                        Menu
                    </Button>
                    <Button color="inherit" component={Link} to="/locations">
                        Locations
                    </Button>
                </Toolbar>
            </AppBar>
            
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
                    {/* Add Drawer Items Here */}
                </List>
            </Drawer>

            <main style={{ padding: '16px 5% 50px 7%' }}>
                {children}
            </main>

            <Box
                component="footer"
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: 2,
                    textAlign: 'center',
                    width: '100%',
                }}
            >
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box component="img" src={logo1} alt="Gom Shabu" sx={{ height: 100 }} />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6">Contact us</Typography>
                        <Typography variant="body2">gomshabu@gmail.com</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6">Annandale</Typography>
                        <Typography variant="body2">4355 John Marr Dr, Annandale, VA 22003</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6">Centreville</Typography>
                        <Typography variant="body2">13840 Braddock Rd F, Centreville, VA 20121</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6">Check us out</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                            <IconButton
                                component="a"
                                href="https://www.instagram.com/gomshabushabu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                            >
                                <Box component="img" src={InstagramLogo} alt="Instagram" sx={{ width: 40, height: 40 }} />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://www.yelp.com/biz/gom-shabu-annandale-annandale"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                            >
                                <Box component="img" src={YelpLogo} alt="Yelp" sx={{ width: 40, height: 40 }} />
                            </IconButton>
                        </Box>
                        <Box>
                            <Typography variant="copyright">
                                &copy; {new Date().getFullYear()} Gom Shabu Annandale. All rights reserved.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Layout;
