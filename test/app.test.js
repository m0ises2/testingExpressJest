const request = require('supertest');
const app = require('../app');

describe('Probar nuestro mini servidor', () => {
    test('Debe responder 200', (done) => {
        request(app).get('/').then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('Debe responder 404', async () => {
        const response = await request(app).get('/return404');
        expect(response.statusCode).toBe(404);
    });

    test('Retorna ok y objeto', async () => {
        const response = await request(app).post('/return/object');
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchSnapshot();

    })
});
