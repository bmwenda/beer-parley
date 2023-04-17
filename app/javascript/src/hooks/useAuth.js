import { useState, useEffect } from 'react';
import { getCurrentUser } from '../utils/utils';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        const { user: currentUser } = response.data;
        setUser(currentUser);
      })
      .catch((_err) => _err);
  }, []);

  return user;
}
