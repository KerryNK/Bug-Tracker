# Bug Tracker

## Installation & Running

### Backend

1. Navigate to the `backend` directory:
   `
   cd backend
   `
2. Install dependencies:
   `
   npm install
   `
3. Start the backend server:
   `
   npm start
   `

### Frontend

1. Navigate to the `frontend` directory:
   `
   cd frontend
   `
2. Install dependencies:
   `
   npm install
   `
3. Start the frontend server:
   `
   npm start
   `

## Testing

### Backend Tests

To run tests for the backend, navigate to the `backend` directory and execute:
`
npm run test
`
To run tests in watch mode:
`
npm run test:watch
`

### Frontend Tests

To run tests for the frontend, navigate to the `frontend` directory and execute:
`
npm run test
`
To run tests in watch mode:
`
npm run test:watch
`

## Debugging Techniques

- Console Logs: Use `console.log()` strategically to trace values and flows.
- Chrome DevTools: Inspect network requests and responses.
- Node.js Inspector: Run the backend with `node --inspect` to set breakpoints and step through code.
- Error Boundaries: Implement React error boundaries to catch runtime errors in the UI and display fallback UI gracefully.

## Testing Approach

- Unit Tests: Test individual functions and components to ensure they work as expected.
- Integration Tests: Test the interaction between components and the backend API to ensure they work together correctly.
- Mocking Strategy: Use mocks to isolate tests and avoid real database calls.

## Project Structure

- Backend: Contains the Express application, controllers, models, routes, middleware, and tests.
- Frontend: Contains the React application, components, API calls, and tests.

This README provides an overview of the Bug Tracker project, including setup instructions, testing commands, debugging techniques, and project structure.
