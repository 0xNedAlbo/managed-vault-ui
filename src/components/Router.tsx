import { createBrowserRouter } from 'react-router-dom';
import Vault from './Vault';

export const router = createBrowserRouter([
  {
    path: '/:address',
    element: <Vault />
  }
]);
