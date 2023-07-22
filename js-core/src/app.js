import { page1 } from './page1'; 

const express = require('express');
 
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>A JavaScript project</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <h1>A JavaScripts project</h1>
</body>
</html>`;

console.log();
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send(html);
});
app.get('/page1', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send(page1);
});
module.exports = app;