import React, { useEffect, useState } from 'react';
import { fetchBugs, updateBugStatus, deleteBug } from '../api/bugApi';

const BugList = () => {
    const [bugs, setBugs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBugs = async () => {
            try {
                const data = await fetchBugs();
                setBugs(data);
            } catch (err) {
                setError('Failed to fetch bugs');
            } finally {
                setLoading(false);
            }
        };

        getBugs();
    }, []);

    const handleStatusChange = async (id, status) => {
        try {
            await updateBugStatus(id, status);
            setBugs(bugs.map(bug => (bug._id === id ? { ...bug, status } : bug)));
        } catch (err) {
            setError('Failed to update bug status');
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteBug(id);
            setBugs(bugs.filter(bug => bug._id !== id));
        } catch (err) {
            setError('Failed to delete bug');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Bug List</h2>
            <ul>
                {bugs.map(bug => (
                    <li key={bug._id}>
                        <h3>{bug.title}</h3>
                        <p>{bug.description}</p>
                        <p>Status: {bug.status}</p>
                        <button onClick={() => handleStatusChange(bug._id, 'in-progress')}>In Progress</button>
                        <button onClick={() => handleStatusChange(bug._id, 'resolved')}>Resolved</button>
                        <button onClick={() => handleDelete(bug._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BugList;