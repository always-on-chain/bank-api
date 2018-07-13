const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../react-client/dist'));

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})