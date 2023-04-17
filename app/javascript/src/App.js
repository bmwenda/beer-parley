import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from './contexts/AuthContext';
import Beers from './components/Beers';
import LogIn from './components/Login';
import SignUp from './components/Signup';

export default function App() {
  const theme = createTheme();
  const [user, setUser] = useState(null);
  const authState = useMemo(() => ({
    user, setUser,
  }), [user, setUser]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthContext.Provider value={authState}>
          <Routes>
            <Route path="/login" exact element={<LogIn />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/beers" exact element={<Beers />} />
            <Route path="/" exact element={<Beers />} />
          </Routes>
        </AuthContext.Provider>
      </Router>
    </ThemeProvider>
  );
}
