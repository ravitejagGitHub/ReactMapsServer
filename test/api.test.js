const request = require('supertest');

const app = require('../src/app');

describe('GET /api/v1', () => {
  it('responds with a json message', function(done) {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🌎🌍🌏' 
      }, done);
  });
});

describe('GET /api/v1/emojis', () => {
  it('responds with a json message', function(done) {
    request(app)
      .get('/api/v1/emojis')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, ['😀', '😳', '🙄'], done);
  });
});

describe('POST /api/routers/messages', () => {
  it('responds with inserted message', function(done) {
    const result = {
      name: 'Raviteja tyu',
      message: 'test message',
      latitude: -90,
      longitude: -100
    };

    request(app)
      .post('/Message')
      .send(result)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
