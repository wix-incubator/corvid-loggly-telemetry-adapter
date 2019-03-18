/* eslint-disable require-jsdoc */
const assert = require('assert');
const fetch = require('node-fetch');
const {LOGGLY_URL_PREFIX} = require('./consts');

class LogglyLogger {
  constructor({token, httpClient = fetch}) {
    assert(token, 'token must be provided');
    this._token = token;
    this._httpClient = httpClient;
  }

  log(payload) {
    return this._httpClient(`${LOGGLY_URL_PREFIX}/${this._token}`, {
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
    });
  }
}
module.exports = LogglyLogger;
