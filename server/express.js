'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
// const cors = require('cors');

const whitelist = [
  'http://127.0.0.1:3000',
  'http://localhost:3000',
  'https://localhost:3000',
  'https://runroom-ui-app.netlify.app/'
];
const headers = [
  'Origin',
  'X-Requested-With',
  'Content-Type',
  'Accept'
];

// const corsOptions = {
//   // origin: (origin, callback) => {
//   //   if (!origin || whitelist.indexOf(origin) !== -1) {
//   //     callback(null, true);
//   //   } else {
//   //     callback(new Error('Not allowed by CORS'));
//   //   }
//   // },
//   origin: whitelist,
//   allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
//   optionsSuccessStatus: 200
// };

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from UI!</h1>');
  res.end();
});
router.get('/list', (req, res) => res.json(require('./list.json')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', whitelist.join(', '));
  res.header('Access-Control-Allow-Headers', headers.join(', '));
  next();
});
app.use(express.static('./public'));
app.use(express.static('./ui'));
app.use(express.json({ extended: false }));
// app.use(cors(corsOptions));
app.use('/.netlify/functions/server', router); // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
