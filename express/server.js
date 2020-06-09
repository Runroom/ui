'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const whitelist = [
  "http://127.0.0.1:3000",
  "http://localhost:3000",
  "https://localhost:3000",
  "http://localhost:5000",
  "https://localhost:5000",
  "https://runroom-ui-app.netlify.app",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/list', (req, res) => {
  const list = require("../api/list.json");

  return res.json(list);
});

// router.get('/another', (req, res) => res.json({ route: req.originalUrl }));

// router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(express.json({ extended: false }));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
// app.use('/list', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
// app.use('/list', (req, res) => {
//   const list = require("../api/list.json");
//   console.log('List!! ', list);
//   return list;
// });


module.exports = app;
module.exports.handler = serverless(app);
