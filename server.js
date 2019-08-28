const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const launchServer = async (file, func) => {
  if (!file || !func) return;

  app.listen(PORT, () => {
    console.log(`Service has started on port ${PORT}`);
  });

  app.use(bodyParser.json());

  const fn = require(`./${file}`);

  app.all('/', fn[func]);
};

module.exports = launchServer;