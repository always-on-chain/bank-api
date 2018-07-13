const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json());

app.post('/accounts', (req, res) => {
  res.send(req.body)
})
const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})