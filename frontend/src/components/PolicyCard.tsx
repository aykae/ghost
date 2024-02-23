import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Divider, Typography, Button } from '@mui/material';
import { getHealthColor } from '../utils/HealthColor';
import { Policy } from '../entities';

export const PolicyCard: React.FC<Policy> = ({ id, estimatedClaim, premium, policyHolders, capitalSum, health }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {id}
        </Typography>
        <Divider />
        <Typography variant="body1">Estimated Claim: {estimatedClaim}</Typography>
        <Typography variant="body1">Premium: {premium}</Typography>
        <Typography variant="body1">Policy Holders: {policyHolders}</Typography>
        <Typography variant="body1">Capital Sum: {capitalSum}</Typography>
        <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
          Health: 
          <div style={{ marginLeft: '10px', height: '10px', backgroundColor: getHealthColor(health), width: `${health}%` }}></div>
        </Typography>
      </CardContent>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
        <Link to={`/policy/${id}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" style={{ borderRadius: '20px' }}>View Policy</Button>
        </Link>
      </div>
    </Card>
  );
};