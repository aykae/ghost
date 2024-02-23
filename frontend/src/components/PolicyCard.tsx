import React from 'react';

interface PolicyCardProps {
    policy: string;
    estimatedClaim: string; // Assuming this is a string, but adjust the type as necessary (e.g., number)
    policyHolders: number;
    capitalPooled: string; // Assuming this is a string, but adjust as necessary
    health: number; // This could also be a number or a specific set of values, adjust as necessary
  }

export const PolicyCard: React.FC<PolicyCardProps> = ({ policy, estimatedClaim, policyHolders, capitalPooled, health }) => {
  return (
    <div className="policy-card">
      <h3>{policy}</h3>
      <div className="policy-detail">
        <strong>Estimated Claim:</strong> {estimatedClaim}
      </div>
      <div className="policy-detail">
        <strong>Policy Holders:</strong> {policyHolders}
      </div>
      <div className="policy-detail">
        <strong>Capital Pooled:</strong> {capitalPooled}
      </div>
      <div className="policy-detail">
        <strong>Health:</strong> {health}
      </div>
    </div>
  );
};