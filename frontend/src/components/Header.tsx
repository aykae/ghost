import React from 'react'
import logo from '../assets/metamasklogo.png';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';


export const Header: React.FC = () => {
  return (
    <AppBar position="static">
        <Toolbar>
          <Box sx={{ width: '33%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Button color="inherit">All Policies</Button>
            <Button color="inherit">My Policies</Button>
          </Box>
          <Box sx={{ width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
              My App
            </Typography>
          </Box>
          <Box sx={{ width: '33%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: 50 }} />
          </Box>
        </Toolbar>
      </AppBar>
  );
};