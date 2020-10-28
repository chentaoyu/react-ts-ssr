import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';

import * as App from '../lib/App.js'

const PORT = 8080
const app = express()
// app.use(express.static('./build'));
var { BUILD_DIR, PUBLIC_DIR } = require('./paths');
app.use(express.static(BUILD_DIR));
app.use(express.static(PUBLIC_DIR));

// const router = express.Router()

// ...other imports and Express config

app.get('/*', (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    // React.createElement(StaticRouter, { location: { url: req.url }, context: { context } },App)
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve(path.join(BUILD_DIR, 'index.html'));
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});