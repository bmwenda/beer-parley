import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AlertMessage from '../shared/AlertMessage';
import { login } from '../utils/utils';
import GoogleSignin from '../shared/GoogleSignin';

export default function LogIn() {
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginParams = {
      email: data.get('email'),
      password: data.get('password'),
    };

    login(loginParams)
      .then(() => {
        setAlert({ type: 'success', message: 'Logged in successfully' });
        navigate('/');
        navigate(0);
      })
      .catch((err) => {
        setAlert({ type: 'error', message: err?.response?.data?.error || 'An error occurred' });
      });
  };

  return (
    <>
      { alert && <AlertMessage type={alert.type} message={alert.message} /> }
      <Container component="main" maxWidth="xs" data-testid="login-page">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="/signup" variant="body2">
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
              <Grid item xs={12} sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <GoogleSignin />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
