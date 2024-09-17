const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.status(200).send('Hello from Docker!'));

test('GET / returns Hello from Docker!', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toEqual(200);
  expect(res.text).toBe('Hello from Docker!');
});
