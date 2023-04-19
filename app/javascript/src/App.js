import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthContext from './contexts/AuthContext';
import Beers from './components/Beers';
import LogIn from './components/Login';
import SignUp from './components/Signup';
import useAuth from './hooks/useAuth';
import Reviews from './components/Reviews';
import Recommendations from './components/Recommendations';

export default function App() {
  const theme = createTheme();
  const currentUser = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthContext.Provider value={currentUser}>
          <Routes>
            <Route path="/login" exact element={<LogIn />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/beers" exact element={<Beers />} />
            <Route path="/community-reviews" exact element={<Reviews />} />
            <Route path="/recommendations" exact element={<Recommendations />} />
            <Route path="/" exact element={<Beers />} />
          </Routes>
        </AuthContext.Provider>
      </Router>
    </ThemeProvider>
  );
}
