import { Link } from 'react-router-dom';
import { getHealthColor } from '../utils/HealthColor';
import { Policy } from '../entities';
import React, { useState, ChangeEvent, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, CardContent, Divider, Typography, Button, TextField } from '@mui/material';

const CreatePolicyForm = () => {
  const [policy, setPolicy] = useState({
    estimatedClaim: '',
    premium: '',
    policyHolders: '',
    capitalSum: '',
    health: 0
  });

  const navigate = useNavigate();

  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { // Specify the type for e
    const { name, value } = e.target;
    setPolicy(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { // Specify the type for e
    e.preventDefault();
    // Here you would typically send the policy data to your backend or state management store
    console.log(policy);
    // After submission, you might want to redirect the user
    navigate('/home');
  };

  return (
    <Container maxWidth="md" sx={{ padding: '20px' }}>
    <Card>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Typography variant="h5" component="div">Create Policy</Typography>
          <Divider />
          <TextField
            label="Estimated Claim"
            variant="outlined"
            name="estimatedClaim"
            value={policy.estimatedClaim}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Premium"
            variant="outlined"
            name="premium"
            value={policy.premium}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Policy Holders"
            variant="outlined"
            name="policyHolders"
            value={policy.policyHolders}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Capital Sum"
            variant="outlined"
            name="capitalSum"
            value={policy.capitalSum}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Health"
            variant="outlined"
            name="health"
            type="number"
            value={policy.health}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
          <Button type="submit" variant="contained" style={{ borderRadius: '20px' }}>Create Policy</Button>
        </div>
      </form>
    </Card>
    </Container>
  );
};

export default CreatePolicyForm;
