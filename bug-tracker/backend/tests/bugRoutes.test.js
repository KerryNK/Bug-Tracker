const request = require('supertest');
const app = require('../src/app'); // Adjust the path as necessary

describe('Bug Routes', () => {
    let bugId;

    it('should create a new bug', async () => {
        const res = await request(app)
            .post('/bugs')
            .send({
                title: 'Test Bug',
                description: 'This is a test bug',
                status: 'open'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        bugId = res.body.id; // Store the bug ID for later tests
    });

    it('should fetch all bugs', async () => {
        const res = await request(app).get('/bugs');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('should update a bug status', async () => {
        const res = await request(app)
            .put(`/bugs/${bugId}`)
            .send({ status: 'resolved' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('resolved');
    });

    it('should delete a bug', async () => {
        const res = await request(app).delete(`/bugs/${bugId}`);
        expect(res.statusCode).toEqual(204);
    });
});