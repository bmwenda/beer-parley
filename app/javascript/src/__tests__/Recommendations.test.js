import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import Recommendations from '../components/Recommendations';
import currentUser from '../__mocks__/auth';

describe('Recommendations page', () => {
  it('renders items', async () => {
    render(
      <AuthContext.Provider value={currentUser}>
        <MemoryRouter>
          <Recommendations />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('recommendations-page')).toBeInTheDocument();
    });
  });

  it('renders alt text when user is not logged in', async () => {
    render(
      <AuthContext.Provider value={null}>
        <MemoryRouter>
          <Recommendations />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText(/Nothing to see yet/)).toBeInTheDocument();
    });
  });
});
