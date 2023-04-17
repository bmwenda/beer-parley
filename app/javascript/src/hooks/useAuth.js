import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function useAuth() {
  const authState = useContext(AuthContext);

  return authState;
}
