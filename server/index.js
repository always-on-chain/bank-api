const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('../database/accounts.js');

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.text());

app.post('/accounts', (req, res) => {
  database.storeAccount(req.body)
  res.send(req.body)
})

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  database.getAccount(username, password, (account) => {
    res.send(account)
  })
})

app.post('/accounts/:id/deposit', (req, res) => {
  let id = req.params.id;
  let newBalance = req.body.newBalance;

  database.makeTransaction(id, newBalance, (account) => {
    res.send(account)
  })
})

app.post('/accounts/:id/withdraw', (req, res) => {
  let id = req.params.id;
  let newBalance = req.body.newBalance;

  database.makeTransaction(id, newBalance, (account) => {
    res.send(account)
  })
})

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})