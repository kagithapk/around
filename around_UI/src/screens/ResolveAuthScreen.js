import { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const { localSignIn } = useContext(AuthContext);

  useEffect(() => {
    localSignIn();
  });

  return null;
};

export default ResolveAuthScreen;
