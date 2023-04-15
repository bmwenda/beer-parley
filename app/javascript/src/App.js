import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LogIn from './components/Login';
import SignUp from './components/Signup';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/signup" exact element={<SignUp />} />
      </Routes>
    </Router>
  );
}
