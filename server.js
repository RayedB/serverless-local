const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

function launchServer(file, func) {

  if (!file || !func) return;

  app.listen(PORT, () => {
    console.log(`Service has started on port ${PORT}`);

    const fn = require(file);

    fn[func]();

  });

};