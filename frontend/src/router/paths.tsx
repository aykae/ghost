   export const HOME_PATH = '/home';
   export const POLICY_PATH = '/policy/:id';
   export const CREATE_POLICY_PATH = '/createpolicy';

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
   };