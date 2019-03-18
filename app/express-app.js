const express = require('express');
const LogglyLogger = require('./lib/LogglyLogger');
const app = express();
const bodyParser = require('body-parser');

module.exports = ({
  token,
  port = process.env.PORT || 8080,
}) => {
  const logger = new LogglyLogger({
    token,
  });

  app.use(bodyParser.json({type: '*/*'}));
  app.get('/is_alive', (req, res) => {
    return res
        .status(200)
        .send('alive')
        .end();
  });

  app.post('/log', async (req, res) => {
    await logger.log(req.body);
    return res
        .status(200)
        .send('success')
        .end();
  });

  return app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};
