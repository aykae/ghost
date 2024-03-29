import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
   HOME_PATH,
   POLICY_PATH,
   CREATE_POLICY_PATH
} from './paths';
import { HomePage, PolicyPage } from '../pages';
import CreatePolicyPage from '../pages/CreatePolicyPage.tsx'

const Router: React.FC = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={HOME_PATH} element={<HomePage />} />
            <Route path={POLICY_PATH} element={<PolicyPage />} />
            <Route path={CREATE_POLICY_PATH} element={<CreatePolicyPage />} />
            <Route path="/" element={<Navigate replace to={HOME_PATH} />} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;