import { Header } from '../../components';
import { LargePolicyCard } from '../../components/LargePolicyCard';
import { Policy } from '../../entities';

const policy: Policy = {
  id: 'ABC123',
  estimatedClaim: 5000,
  premium: 100,
  policyHolders: 3,
  capitalSum: 10000,
  health: 70,
};

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <LargePolicyCard policy={{...policy}} />
    </div>
  )
};

export default HomePage;