import { Container, Grid } from '@mui/material';
import { PolicyCard } from '.';
import { Policy } from '../entities';

const casper: Policy = {
  id: 'Casper',
  estimatedClaim: 500000,
  premium: 100,
  policyHolders: 3000000,
  capitalSum: 500000000,
  health: 100,
};

export const Main: React.FC = () => {

  return (
    <Container sx={{ padding: '20px' }}> {/* Apply padding of 20px */}
      <Grid container spacing={2}>
      <PolicyCard {...casper} />


        
      </Grid>
    </Container>
  )
}