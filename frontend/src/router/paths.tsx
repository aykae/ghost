   export const HOME_PATH = '/home';
   export const POLICY_PATH = '/policy/:id';

   export type RouterPathsMap = {
      [HOME_PATH]: {
         urlParams: undefined;
         queryParams: undefined;
      };
      [POLICY_PATH]: {
         urlParams: { id: string; };
         queryParams: undefined;
      };
   };