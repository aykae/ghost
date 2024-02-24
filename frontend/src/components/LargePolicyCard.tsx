import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Divider, Button, useTheme } from '@mui/material';
import { Policy } from '../entities';
import { buyPolicy } from '../hooks/buy-policy';
import { Link } from 'react-router-dom';

interface LargePolicyCardProps {
  policy: Policy;
}

export const LargePolicyCard: React.FC<LargePolicyCardProps> = ({ policy }) => {
  const theme = useTheme();
  const [owned, setOwned] = useState(false);

  const handleBuyClick = async () => {
    await buyPolicy(policy.id);
    setOwned(true); // Set owned to true after successfully purchasing the policy
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
          {/* Conditionally render the button with reduced opacity if owned */}
          <Link to="/buypolicy" style={{ textDecoration: 'none' }}>
    <Button onClick={handleBuyClick} disabled={owned} sx={{
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.getContrastText(theme.palette.secondary.main),
      width: '50%',
      borderRadius: '20px',
      opacity: owned ? 0.5 : 1, // Reduce opacity if owned
    }}>
      {owned ? 'Owned by user' : 'Buy'}
    </Button>
  </Link>
        </div>
      </Card>
    </Container>
  );
};