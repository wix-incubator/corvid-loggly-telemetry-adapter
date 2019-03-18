const createApp = require('./express-app');
const secret = require('../secret.json');
createApp({
  token: secret.TOKEN,
});
