const request = require('supertest');
const app = require('../app'); // Assuming your app is exported from '../app'

describe('Route Tests', () => {
    let userId = 1; // Sample user ID for testing

    it('POST /users - Creates a new user', async () => {
        const res = await request(app)
            .post('/users')
            .send({ name: 'User', age: 30 });

        expect(res.statusCode).toEqual(201); // Expecting HTTP status code 201 (Created)
        expect(res.body).toHaveProperty('id'); // Expecting response body to have an 'id' property
    });

    it('GET /users/:id - Retrieves an existing user', async () => {
        const res = await request(app).get(`/users/${userId}`);

        expect(res.statusCode).toEqual(200); // Expecting HTTP status code 200 (OK)
        expect(res.body.id).toEqual(userId); // Expecting retrieved user ID to match the requested ID
    });

    it('PUT /users/:id - Updates an existing user', async () => {
        const res = await request(app)
            .put(`/users/${userId}`)
            .send({ name: 'UpdateUser' });

        expect(res.statusCode).toEqual(200); // Expecting HTTP status code 200 (OK)
        expect(res.body.name).toEqual('UpdateUser'); // Expecting updated user name to match sent data
    });

    it('GET /users/:id - Returns 404 error for non-existent user', async () => {
        const res = await request(app).get('/users/999'); // Assuming user with ID 999 doesn't exist

        expect(res.statusCode).toEqual(404); // Expecting HTTP status code 404 (Not Found)
        expect(res.text).toEqual('User not found'); // Expecting error message 'User not found'
    });
});
