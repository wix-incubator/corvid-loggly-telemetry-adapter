/* eslint-disable require-jsdoc */
const fetch = require('node-fetch');
const expressApp = require('../app/express-app');
const nock = require('nock');

describe('app', () => {
  let app;
  const port = 8081;
  const appUrl = `http://localhost:${port}`;
  const secret = {
    token: 'fake-token',
  };


  beforeAll(() => {
    nock.restore();
    app = expressApp({
      token: secret.token,
      port,
    });
  });

  afterAll(() => {
    app.close();
    nock.restore();
  });

  it('should respond with alive to /is_alive', async () => {
    const res = await fetch(`${appUrl}/is_alive`);
    expect(res.status).toBe(200);
    return expect(res.text()).resolves.toBe('alive');
  });

  it('should succeed to post a log', async () => {
    let result;
    const body = {
      logName: 'some-log-name',
      jsonPayload: {
        message: 'some-message',
      },
    };
    nock.activate();
    nock('http://logs-01.loggly.com')
        .post(`/inputs/fake-token`)
        .reply(200, (req, data) => {
          result = data;
        });


    const res = await fetch(`${appUrl}/log`, {
      method: 'post',
      body: JSON.stringify(body),
    });
    expect(res.status).toBe(200);
    await expect(res.text()).resolves.toBe('success');
    expect(result).toEqual(body);
  });
});
