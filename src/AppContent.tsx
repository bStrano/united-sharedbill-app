import React from 'react';
import {useContext} from 'react';
import {SessionContext} from './providers/SessionProvider';
import AuthenticationStack from './navigations/AuthenticationStack';
import AuthenticatedStack from './navigations/AuthenticatedStack';

export default function AppContent() {
  const sessionContext = useContext(SessionContext);

  if (!sessionContext.isLoggedIn) {
    return <AuthenticationStack />;
  }

  return <AuthenticatedStack />;
}
