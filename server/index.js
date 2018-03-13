const express = require('express'),
      bodyParser = require('body-parser'),
      data = require('./data.json');

const app = express(),
      port = 3005;

app.use(bodyParser.json());

app.get('/api/getUsers', (req, res) => {
  res.status(200).send(data);
})

app.get('/api/getUsers/:id', (req, res) => {
  let user = data.filter(e => e.id === +req.params.id)
  res.status(200).send(user[0]);
})

app.listen(port, () => console.log(`listening on port ${port}`));