   export const HOME_PATH = '/home';
   export const POLICY_PATH = '/policy/:id';
   export const CREATE_POLICY_PATH = '/createpolicy';
   export const MY_POLICY = '/mypolicy';
   export const ADDED_POLICY = '/addedpolicy';
   export const BUY_POLICY = '/buypolicy';

   export type RouterPathsMap = {
      [HOME_PATH]: {
         urlParams: undefined;
         queryParams: undefined;
      };
      [POLICY_PATH]: {
         urlParams: { id: string; };
         queryParams: undefined;
      };
      [CREATE_POLICY_PATH]: {
         urlParams: { id: string; };
         queryParams: undefined;
      };
      [MY_POLICY]: {
         urlParams: { id: string; };
         queryParams: undefined;
      };
      [ADDED_POLICY]: {
         urlParams: { id: string; };
         queryParams: undefined;
      };
      [BUY_POLICY]: {
         urlParams: { id: string; };
         queryParams: undefined;
      };
   };