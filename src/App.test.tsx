import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './components/Home/Home';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children, to }: any) => <a href={to}>{children}</a>,
}));

test('renders prototypes home page', () => {
  render(<Home />);
  const heading = screen.getByText(/Salvall Prototypes/i);
  expect(heading).toBeInTheDocument();
});
