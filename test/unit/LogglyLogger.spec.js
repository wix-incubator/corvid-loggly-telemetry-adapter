const LogglyLogger = require('../../app/lib/LogglyLogger');
const {LOGGLY_URL_PREFIX} = require('../../app/lib/consts');
const {
  AssertionError,
} = require('assert');

describe('LogglyLogger', () => {
  describe('assertions', () => {
    it('throws an error when token is not provided', () => {
      expect(() => new LogglyLogger({})).toThrow(AssertionError);
    });
  });

  describe('.log', () => {
    it('should post log via the provided httpClient', () => {
      const httpClientStub = jest.fn();
      const token = 'fake-token';
      const payload = {
        message: 'some-message',
      };
      const logglyLogger = new LogglyLogger({
        token,
        httpClient: httpClientStub,
      });

      logglyLogger.log(payload);

      expect(httpClientStub).toHaveBeenCalledTimes(1);
      expect(httpClientStub)
          .toHaveBeenLastCalledWith(`${LOGGLY_URL_PREFIX}/${token}`, {
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
          });
    });
  });
});
