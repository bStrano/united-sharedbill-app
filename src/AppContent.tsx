import React from 'react';
import {useSession} from '@providers/SessionProvider';
import AuthenticationStack from './navigations/AuthenticationStack';
import AuthenticatedStack from './navigations/AuthenticatedStack';

export default function AppContent() {
  const sessionContext = useSession();

  if (!sessionContext.isLoggedIn) {
    return <AuthenticationStack />;
  }

  return <AuthenticatedStack />;
}
