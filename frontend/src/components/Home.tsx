import { PolicyCard } from '../components';

export const Home: React.FC = () => {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
        <PolicyCard
        policy="Life Insurance #1"
        estimatedClaim="$10,000"
        policyHolders={200}
        capitalPooled="$500,000"
        health= {99}
       />

<PolicyCard
        policy="Life Insurance # 2"
        estimatedClaim="$10,000"
        policyHolders={200}
        capitalPooled="$500,000"
        health= {99}
       />

<PolicyCard
        policy="Life Insurance #3"
        estimatedClaim="$10,000"
        policyHolders={200}
        capitalPooled="$500,000"
        health= {99}
       />

        </div>

    
    </main>
  )
}