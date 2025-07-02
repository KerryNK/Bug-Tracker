import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BugList from '../src/components/BugList';
import * as bugApi from '../src/api/bugApi';

jest.mock('../src/api/bugApi');

describe('BugList Component', () => {
    const bugs = [
        { id: 1, title: 'Bug 1', description: 'Description 1', status: 'open' },
        { id: 2, title: 'Bug 2', description: 'Description 2', status: 'in-progress' },
    ];

    beforeEach(() => {
        bugApi.fetchBugs.mockResolvedValue(bugs);
    });

    test('renders bug list', async () => {
        render(<BugList />);

        const bugItems = await screen.findAllByRole('listitem');
        expect(bugItems).toHaveLength(bugs.length);
    });

    test('displays bug titles', async () => {
        render(<BugList />);

        for (const bug of bugs) {
            expect(await screen.findByText(bug.title)).toBeInTheDocument();
        }
    });

    test('handles empty bug list', async () => {
        bugApi.fetchBugs.mockResolvedValue([]);

        render(<BugList />);

        expect(await screen.findByText('No bugs available')).toBeInTheDocument();
    });

    test('updates bug status', async () => {
        render(<BugList />);

        const updateButton = await screen.findByText('Update Status');
        fireEvent.click(updateButton);

        expect(bugApi.updateBugStatus).toHaveBeenCalledWith(bugs[0].id, 'in-progress');
    });

    test('deletes a bug', async () => {
        render(<BugList />);

        const deleteButton = await screen.findByText('Delete');
        fireEvent.click(deleteButton);

        expect(bugApi.deleteBug).toHaveBeenCalledWith(bugs[0].id);
    });
});