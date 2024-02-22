export interface Policy {
   id: number;
   estimatedClaim: number;
   premium: number;
   policyHolders: number;
   capitalSum: number;
   health?: string;
};

export default Policy;