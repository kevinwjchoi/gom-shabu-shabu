import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, Box, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramLogo from '../images/instagram.svg';
import YelpLogo from '../images/yelp.svg';
import { Link } from 'react-router-dom';
import '../styles/Layout.css';
import gomlogo from '../images/gomlogo.png';
import gomlogocolor from '../images/gomlogocolor.png';
import QRCode from '../images/Gom_Shabu_Full_Menu.png';
import { useTheme } from '@mui/material/styles';

const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <div className="layout-container">
            <AppBar position="static" sx={{ height: 100, backgroundColor: 'black' }}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ mr: 4 }}>
                        <MenuIcon />
                    </IconButton>
                    <Link to="/home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Box component="img" src={gomlogo} alt="Gom Shabu" sx={{ height: 70, mr: 2 }} />
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button color="inherit" component={Link} to="/home" sx={{ mr: 5, fontSize: '1rem' }}>
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/aboutus" sx={{ mr: 5, fontSize: '1rem' }}>
                        About Us
                    </Button>
                    <Button color="inherit" component={Link} to="/menu" sx={{ mr: 5, fontSize: '1rem' }}>
                        Menu
                    </Button>
                    <Button color="inherit" component={Link} to="/locations" sx={{ mr: 5, fontSize: '1rem' }}>
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
                        width: 180,
                        backgroundColor: theme.palette.primary.main, // Use theme color for background
                    },
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    {/* Logo at the top of the drawer */}
                    <Link to="/home" className="drawer-link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                        <Box component="img" src={gomlogo} alt="Gom Shabu" sx={{ height:100 }} />
                    </Link>

                    {/* Drawer links */}
                    <List>
                        <ListItem button component={Link} to="/home" onClick={toggleDrawer(false)} className="drawer-button">
                            <ListItemText primary={<span className="drawer-link">Home</span>} />
                        </ListItem>
                        <ListItem button component={Link} to="/aboutus" onClick={toggleDrawer(false)} className="drawer-button">
                            <ListItemText primary={<span className="drawer-link">About Us</span>} />
                        </ListItem>
                        <ListItem button component={Link} to="/menu" onClick={toggleDrawer(false)} className="drawer-button">
                            <ListItemText primary={<span className="drawer-link">Menu</span>} />
                        </ListItem>
                        <ListItem button component={Link} to="/locations" onClick={toggleDrawer(false)} className="drawer-button">
                            <ListItemText primary={<span className="drawer-link">Locations</span>} />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            {/* Main content area with flex-grow */}
            <main style={{ flex: 1 }}>
                {children}
            </main>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: 2,
                    textAlign: 'center',
                    width: '100%',
                    mt: 'auto', // Ensure footer sticks to bottom if content is less
                }}
            >
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={2} sx={{ display: 'flex' }}>
                        <Box component="img" src={gomlogo} alt="Gom Shabu" sx={{ height: 100 }} />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h6">Contact us</Typography>
                        <Typography variant="body2">support@gom-shabu.com</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Box component="img" src={QRCode} alt="QR Code" sx={{ width: 100, height: 100, mt: 1 }} />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h6">Annandale</Typography>
                        <Typography variant="body2">4355 John Marr Dr <br /> Annandale, VA 22003</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h6">Check us out</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
                    </Grid>
                    <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
                        <Box>
                            <Typography variant="caption">
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
