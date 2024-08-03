import React, { Suspense, useEffect } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CSpinner, useColorModes } from '@coreui/react';
import './scss/style.scss';
import { useAuth } from './components/AuthProvider';

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const SignInSide = React.lazy(() => import('./components/SignInSide'));
const PasswordRecovery = React.lazy(() => import('./components/PasswordRecovery'));

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui');
  const storedTheme = useSelector((state) => state.theme);
  const { currentUser } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0];
    if (theme) {
      setColorMode(theme);
    }

    if (isColorModeSet()) {
      return;
    }

    setColorMode(storedTheme);
  }, [isColorModeSet, setColorMode, storedTheme]);

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route path="/login" element={<SignInSide />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="*" name="Home" element={currentUser ? <DefaultLayout /> : <Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
