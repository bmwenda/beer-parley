import { useState, useEffect } from 'react';
import { getCurrentUser } from '../utils/utils';

export default function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((_err) => _err);
  }, []);

  return currentUser;
}
