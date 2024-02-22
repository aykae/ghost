import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
   HOME_PATH,
   POLICY_PATH,
} from './paths';
import { HomePage } from '../pages';

const Router: React.FC = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={HOME_PATH} element={<HomePage />} />
            <Route path="/" element={<Navigate replace to={HOME_PATH} />} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;