import { Policy } from '../entities';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import { getHealthColor } from '../utils/HealthColor';

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
    </Card>
  );
};