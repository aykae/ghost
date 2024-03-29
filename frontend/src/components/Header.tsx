import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link component
import MetaMask from './MetaMask';
import logo from '../assets/ghostlogo.png';

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ width: '20%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
          <img src={logo} alt="Logo" style={{height:50}}/>
          </Typography>
        </Box>
        <Box sx={{ width: '33%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          {/* Use Link component to create a clickable link to '/home' */}
          <Button color="inherit" component={Link} to="/home">
            All Policies
          </Button>
          {/* Use Link component to create a clickable link to '/home' */}
          <Button color="inherit" component={Link} to="/home">
            My Policies
          </Button>
          <Button color="inherit" component={Link} to="/createpolicy">
            Create Policy
          </Button>
        </Box>
        <Box sx={{ width: '33%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <MetaMask />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
