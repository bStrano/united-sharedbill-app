import {useContext} from 'react';
import {SessionContext} from './providers/SessionProvider';
import AuthenticationStack from './navigations/AuthenticationStack';
import CoreNavigator from './navigations/CoreNavigator';

export default function AppContent() {
  const sessionContext = useContext(SessionContext);

  if (!sessionContext.isLoggedIn) {
    return <AuthenticationStack />;
  }

  return <CoreNavigator />;
}
