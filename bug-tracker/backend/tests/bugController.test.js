const request = require('supertest');
const app = require('../src/app'); // Adjust the path as necessary
const Bug = require('../src/models/bug');

describe('Bug Controller', () => {
    beforeEach(async () => {
        await Bug.deleteMany({});
    });

    it('should create a new bug', async () => {
        const response = await request(app)
            .post('/bugs')
            .send({
                title: 'Test Bug',
                description: 'This is a test bug',
                status: 'open'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('_id');
        expect(response.body.title).toBe('Test Bug');
    });

    it('should fetch all bugs', async () => {
        await Bug.create({
            title: 'Test Bug 1',
            description: 'This is the first test bug',
            status: 'open'
        });

        const response = await request(app).get('/bugs');

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].title).toBe('Test Bug 1');
    });

    it('should update a bug status', async () => {
        const bug = await Bug.create({
            title: 'Test Bug 2',
            description: 'This is the second test bug',
            status: 'open'
        });

        const response = await request(app)
            .put(`/bugs/${bug._id}`)
            .send({ status: 'resolved' });

        expect(response.status).toBe(200);
        expect(response.body.status).toBe('resolved');
    });

    it('should delete a bug', async () => {
        const bug = await Bug.create({
            title: 'Test Bug 3',
            description: 'This is the third test bug',
            status: 'open'
        });

        const response = await request(app).delete(`/bugs/${bug._id}`);

        expect(response.status).toBe(204);

        const deletedBug = await Bug.findById(bug._id);
        expect(deletedBug).toBeNull();
    });
});