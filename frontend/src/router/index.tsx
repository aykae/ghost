import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
   HOME_PATH,
   POLICY_PATH,
   CREATE_POLICY_PATH,
   MY_POLICY,
   ADDED_POLICY,
   BUY_POLICY
} from './paths';
import { HomePage, PolicyPage} from '../pages';
import CreatePolicyPage from '../pages/CreatePolicyPage.tsx'
import MyPolicyPage from '../pages/MyPolicyPage'
import AddedPolicyPage from '../pages/AddedPolicyPage'
import BuyPolicyPage from '../pages/BuyPolicyPage'



const Router: React.FC = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={HOME_PATH} element={<HomePage />} />
            <Route path={POLICY_PATH} element={<PolicyPage />} />
            <Route path={MY_POLICY} element={<MyPolicyPage />} />
            <Route path={CREATE_POLICY_PATH} element={<CreatePolicyPage />} />
            <Route path={ADDED_POLICY} element={<AddedPolicyPage />} />
            <Route path={BUY_POLICY} element={<BuyPolicyPage />} />
            <Route path="/" element={<Navigate replace to={HOME_PATH} />} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;