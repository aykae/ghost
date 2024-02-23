export interface Policy {
   id: string;
   estimatedClaim: number;
   premium: number;
   policyHolders: number;
   capitalSum: number;
   health?: string;
};

export default Policy;