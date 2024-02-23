import { Policy } from '../entities';

export interface User {
   publicKey: string;
   name: string;
   deadLOL: false;
   policies: Policy[]
   payments?: string;
   amountDue?: number;
};

export default User;