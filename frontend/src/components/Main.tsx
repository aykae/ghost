import { Container, Grid } from '@mui/material';
import { PolicyCard } from '.';
import { Policy } from '../entities';

const policy: Policy = {
  id: 'ABC123',
  estimatedClaim: 5000,
  premium: 100,
  policyHolders: 3,
  capitalSum: 10000,
  health: 70,
};

export const Main: React.FC = () => {
  return (
    <Container sx={{ padding: '20px' }}> {/* Apply padding of 20px */}
      <Grid container spacing={2}>
        {[...Array(8)].map((_, index) => ( // Generate 8 PolicyCard components
          <Grid key={index} item xs={12} sm={6} md={4}>
            <PolicyCard {...policy} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}