import React, { useEffect, useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import ErrorBoundary from './components/ErrorBoundary';
import { fetchBugs } from './api/bugApi';

const App = () => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBugs = async () => {
      try {
        const fetchedBugs = await fetchBugs();
        setBugs(fetchedBugs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getBugs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ErrorBoundary>
      <div>
        <h1>Bug Tracker</h1>
        <BugForm setBugs={setBugs} />
        <BugList bugs={bugs} setBugs={setBugs} />
      </div>
    </ErrorBoundary>
  );
};

export default App;