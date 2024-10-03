import React from "react";
import { Box, Typography } from '@mui/material';
import '../App.css';
import interior1 from '../images/Interior1.png';
import food3 from '../images/food3.jpeg';
import meat1 from '../images/meat1.jpeg';

const AboutUs = () => {
    return (
        <>
            {/* Fullscreen Section */}
            <Box className="fullscreen-container">
                <div
                    className="fullscreen-background"
                    style={{ backgroundImage: `url(${interior1})` }}
                />
                <div className="overlay" />

                <Box className="content">
                    <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, textAlign: 'center' }}>
                        ABOUT US
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            mt: 2, 
                            fontSize: { xs: '1rem', md: '1.25rem' }, 
                            maxWidth: '90%', // Allow more space on mobile
                            mx: 'auto', // Center the text
                            textAlign: 'center',
                            lineHeight: 1.7 
                        }}
                    >
                        Nestled in the heart of Annandale, Gom Shabu is the fourth location in our ever-growing chain of Korean hot pot restaurants. Since our establishment in 2021, we have been dedicated to bringing an authentic and delicious hot pot experience to our guests.
                    </Typography>
                </Box>
            </Box>

            {/* Additional Sections Below */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                    gridTemplateRows: { xs: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)' },
                    gap: 1,
                    padding: 1,
                }}
            >
                {/* First Section: What We Offer */}
                <Box
                    sx={{
                        gridColumn: { xs: '1 / -1', md: '1 / 2' },
                        gridRow: { xs: '1', md: '1 / 2' },
                        padding: { xs: 2, md: 3 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        backgroundColor: '#222222',
                    }}
                >

                    <Box className="content-with-background" sx={{ zIndex: 1 }}>
                        <Typography variant="h1" sx={{ color: 'white', mt: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
                            WHAT WE OFFER
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: 'rgba(65, 64, 64, 0.5)', 
                                borderRadius: '12px', 
                                padding: { xs: 2, md: 3 }, // Adjusted padding
                                mt: 4,
                                maxWidth: '90%', // Center on mobile
                                mx: 'auto', // Center the box
                                boxShadow: 2,
                            }}
                        >
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: 'white', 
                                    textAlign: 'left', 
                                    fontSize: { xs: '1rem', md: '1.25rem' }
                                }}
                            >
                                <strong>Sauces made in-house:</strong> Enjoy our flavorful creations including spicy chili oil, tangy ponzu, and our selected peanut sauce. Don’t miss our special Gom Sauce, available in five heat levels to suit your taste—crafted to enhance your dining experience with bold, authentic flavors.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Second Section: Photo 1 */}
                <Box
                    sx={{
                        gridColumn: { xs: '1 / -1', md: '2 / 3' },
                        gridRow: { xs: '2', md: '1 / 2' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#222222',
                    }}
                >
                    <Box className="image-container" sx={{ width: '100%', height: 'auto' }}>
                        <Box
                            component="img"
                            src={food3}
                            alt="About Us"
                            sx={{
                                width: '100%',
                                height: 'auto', // Use auto height for responsive scaling
                                objectFit: 'cover',
                            }}
                        />
                        <Box className="image-overlay">
                            <Typography variant="body1" className="image-overlay-content" sx={{ color: 'white', textAlign: 'center', mt: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                                Our vegetable broth is made in-house by simmering fresh vegetables, herbs, and spices for 8 hours. This slow-cooking process enhances the flavors, resulting in a rich, savory broth that forms the perfect base for our dishes.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Third Section: Photo 2 */}
                <Box
                    sx={{
                        gridColumn: { xs: '1 / -1', md: '1 / 2' },
                        gridRow: { xs: '3', md: '2 / 3' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'black',
                    }}
                >
                    <Box className="image-container" sx={{ width: '100%', height: 'auto' }}>
                        <Box
                            component="img"
                            src={meat1}
                            alt="New Section"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                            }}
                        />
                        <Box className="image-overlay">
                            <Typography 
                                variant="body1" className="image-overlay-content" 
                                sx={{ color: 'white', textAlign: 'center', 
                                mt: 2, 
                                fontSize: { xs: '1rem', md: '1.25rem' },
                                paddingX: { xs: '1rem', md: '3rem' }, // Adjusted padding
                                }}>
                                Our meats are thinly sliced to order, ensuring peak freshness and tenderness with every dish. Each slice is expertly cut for consistent quality and flavor.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Fourth Section: Join Us */}
                <Box
                    sx={{
                        gridColumn: { xs: '1 / -1', md: '2 / 3' },
                        gridRow: { xs: '4', md: '2 / 3' },
                        padding: { xs: 2, md: 3 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        backgroundColor: '#222222',
                    }}
                >

                    <Box className="content-with-background" sx={{ zIndex: 1 }}>
                        <Typography variant="h1" sx={{ color: 'white', fontSize: { xs: '2rem', md: '3rem' } }}>
                            JOIN US
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: 'rgba(65, 64, 64, 0.5)', 
                                borderRadius: '12px', 
                                padding: { xs: 2, md: 3 }, // Adjusted padding
                                mt: 4,
                                maxWidth: '90%', // Center on mobile
                                mx: 'auto', // Center the box
                                boxShadow: 2,
                            }}
                        >
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: 'white', 
                                    textAlign: 'left', 
                                    fontSize: { xs: '1rem', md: '1.25rem' }
                                }}
                            >
                                We invite you to experience the delicious, interactive dining that Gom Shabu has to offer. Whether you’re a hot pot aficionado or trying it for the first time, our team is here to ensure your visit is memorable and enjoyable. Thank you for being part of our journey. We look forward to serving you!
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AboutUs;
