import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const CustomAppBar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // Change background color after 50px scroll
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: scrolled ? '#3f51b5' : 'transparent', // Change the background color
        transition: 'background-color 0.3s ease',
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center">
          {/* Add your logo here */}
          <img src="https://example.com/logo.png" alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
          <Typography variant="h6">
            My App
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
