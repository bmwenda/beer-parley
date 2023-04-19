import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import Beers from '../components/Beers';
import currentUser from '../__mocks__/auth';

describe('Home page', () => {
  it('renders tool bar items', () => {
    render(
      <AuthContext.Provider value={currentUser}>
        <MemoryRouter>
          <Beers />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getAllByText(/Beer Talk/)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Reviews/)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Recommendations/)[0]).toBeInTheDocument();
  });

  it('renders beers page', async () => {
    render(
      <AuthContext.Provider value={currentUser}>
        <MemoryRouter>
          <Beers />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('beers-page')).toBeInTheDocument();
    });
  });

  it('opens review form', async () => {
    render(
      <AuthContext.Provider value={currentUser}>
        <MemoryRouter>
          <Beers />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    await waitFor(() => {
      const reviewButton = screen.queryAllByTestId('review-form-btn')[0];
      expect(reviewButton).toBeInTheDocument();

      fireEvent.click(reviewButton);
      expect(screen.getByTestId('review-form')).toBeInTheDocument();
    });
  });
});
