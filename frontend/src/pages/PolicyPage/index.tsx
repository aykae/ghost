import { Header } from '../../components';
import { LargePolicyCard } from '../../components/LargePolicyCard';
import { Policy } from '../../entities';

const policy: Policy = {
  id: 'Casper',
  estimatedClaim: 500000,
  premium: 100,
  policyHolders: 3000000,
  capitalSum: 500000000,
  health: 100,
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