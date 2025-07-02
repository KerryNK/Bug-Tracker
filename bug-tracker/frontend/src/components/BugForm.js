import React, { useState } from 'react';
import { createBug } from '../api/bugApi';

const BugForm = ({ onBugCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('open');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const newBug = { title, description, status };
            const createdBug = await createBug(newBug);
            onBugCreated(createdBug);
            setTitle('');
            setDescription('');
            setStatus('open');
        } catch (err) {
            setError('Failed to create bug. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Report a New Bug</h2>
            {error && <p className="error">{error}</p>}
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                </select>
            </div>
            <button type="submit">Submit Bug</button>
        </form>
    );
};

export default BugForm;