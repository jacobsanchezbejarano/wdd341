const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const hostname = '127.0.0.1';

app.use(require('./routes'))

app.listen(port, ()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
});