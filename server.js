const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

function functionCaller(req, res, esModule, funcName) {
  try {
    const result = esModule[funcName](req, res);
    if (!result) return;
    res.send(result);
  }
  catch (e) {
    console.error(e);
    res.status(500).send({ message: 'an error occured while running your function... you should see logs for more info' });
  }
}

const launchServer = async (file, funcName) => {
  if (!file || !funcName) return;

  app.listen(PORT, () => {
    console.log(`Service has started on port ${PORT}`);
  });

  app.use(bodyParser.json());

  const esModule = require(`./${file}`);

  app.all('/', (req, res) => functionCaller(req, res, esModule, funcName));
};

module.exports = launchServer;