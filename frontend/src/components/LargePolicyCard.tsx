import React from 'react';
import { Container, Card, CardContent, Typography, Divider, Button, useTheme } from '@mui/material';
import { Policy } from '../entities';
import { buyPolicy } from '../hooks/buy-policy';

interface LargePolicyCardProps {
  policy: Policy;
}

export const LargePolicyCard: React.FC<LargePolicyCardProps> = ({ policy }) => {
  const theme = useTheme();

   const handleBuyClick = async () => {
      const bought = await buyPolicy(policy.id);
   };

  return (
    <Container maxWidth="md" sx={{ padding: '20px' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {policy.id}
          </Typography>
          <Divider />
          <Typography variant="body1" gutterBottom>
            Estimated Claim: {policy.estimatedClaim}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Premium: {policy.premium}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Policy Holders: {policy.policyHolders}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Capital Sum: {policy.capitalSum}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Health: {policy.health}
          </Typography>
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
          <Button onClick={handleBuyClick} sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.getContrastText(theme.palette.secondary.main), width: '50%', borderRadius: '20px' }}> {/* Adjusted borderRadius */}
            Buy
          </Button>
        </div>
      </Card>
    </Container>
  );
};