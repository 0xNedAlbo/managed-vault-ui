import { createHashRouter } from 'react-router-dom';
import Vault from './Vault';

export const router = createHashRouter([
  {
    path: ':address',
    element: <Vault />
  }
]);
