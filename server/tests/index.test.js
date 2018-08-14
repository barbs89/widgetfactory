const request = require('supertest');
const { app } = require('../index');

describe('GET /api/hello', () => {
  test('should return hello', async (done) => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body.express).toBeTruthy();
    done();
  });
});
