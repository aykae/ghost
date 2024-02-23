export interface Policy {
   id: string;
   estimatedClaim: number;
   premium: number;
   policyHolders: number;
   capitalSum: number;
   health: number;
};

export default Policy;