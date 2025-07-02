import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../src/components/BugForm';

describe('BugForm Component', () => {
  test('renders BugForm correctly', () => {
    render(<BugForm />);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('submits the form with correct values', () => {
    const mockSubmit = jest.fn();
    render(<BugForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Test Bug' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'This is a test bug.' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      title: 'Test Bug',
      description: 'This is a test bug.',
    });
  });

  test('displays validation error when fields are empty', () => {
    render(<BugForm />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
    expect(screen.getByText(/description is required/i)).toBeInTheDocument();
  });
});