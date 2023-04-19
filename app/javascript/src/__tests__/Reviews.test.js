import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import Reviews from '../components/Reviews';
import currentUser from '../__mocks__/auth';

describe('Reviews page', () => {
  it('renders items', async () => {
    render(
      <AuthContext.Provider value={currentUser}>
        <MemoryRouter>
          <Reviews />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('reviews-page')).toBeInTheDocument();
    });
  });
});
