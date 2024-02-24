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

const boo: Policy = {
  id: 'Boo',
  estimatedClaim: 10000000,
  premium: 10000,
  policyHolders: 25000,
  capitalSum: 60000000000,
  health: 20,
};

const danny: Policy = {
  id: 'Danny Phantom',
  estimatedClaim: 100000,
  premium: 30,
  policyHolders: 90000,
  capitalSum: 400000,
  health: 60,
};

const slimer = {
  id: 'Slimer',
  estimatedClaim: 8995790,
  premium: 5772,
  policyHolders: 1481733,
  capitalSum: 39025384723,
  health: 62
};

const moaningMyrtle = {
  id: 'Moaning Myrtle',
  estimatedClaim: 2640049,
  premium: 8256,
  policyHolders: 513164,
  capitalSum: 6217063843,
  health: 55
};

const theFlyingDutchman = {
  id: 'The Flying Dutchman',
  estimatedClaim: 3125582,
  premium: 6117,
  policyHolders: 1355887,
  capitalSum: 30282223715,
  health: 22
};

const beetlejuice = {
  id: 'Beetlejuice',
  estimatedClaim: 3701112,
  premium: 980,
  policyHolders: 1985609,
  capitalSum: 21816695304,
  health: 70
};

const peeves = {
  id: 'Peeves',
  estimatedClaim: 4821815,
  premium: 752,
  policyHolders: 54499,
  capitalSum: 31673986204,
  health: 24
};

const nearlyHeadlessNick = {
  id: 'Nearly Headless Nick',
  estimatedClaim: 6311355,
  premium: 1801,
  policyHolders: 519035,
  capitalSum: 12723493363,
  health: 20
};

const NewPolicy = {
    id: 'New Policy',
    estimatedClaim: 10000,
    premium: 10,
    policyHolders: 0,
    capitalSum: 0,
    health: 0
  };

export const Main: React.FC = () => {
  // Add state for list of cards

  return (
    <Container sx={{ padding: '20px' }}> {/* Apply padding of 20px */}
      <Grid container spacing={2}>
      <PolicyCard {...casper} />
      <PolicyCard {...boo} />
      <PolicyCard {...danny} />
      <PolicyCard {...slimer} />
      <PolicyCard {...moaningMyrtle} />
      <PolicyCard {...theFlyingDutchman} />
      <PolicyCard {...beetlejuice} />
      <PolicyCard {...peeves} />
      <PolicyCard {...nearlyHeadlessNick} />
      <PolicyCard {...NewPolicy} />
        
      </Grid>
    </Container>
  )
}