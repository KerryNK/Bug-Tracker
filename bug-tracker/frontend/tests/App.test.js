import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Bug Tracker title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Bug Tracker/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders BugForm component', () => {
  render(<App />);
  const formElement = screen.getByRole('form');
  expect(formElement).toBeInTheDocument();
});

test('renders BugList component', () => {
  render(<App />);
  const listElement = screen.getByRole('list');
  expect(listElement).toBeInTheDocument();
});