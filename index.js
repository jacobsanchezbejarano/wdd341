const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongodb = require('./db/connect');
const port = process.env.PORT || 3030;
const hostname = '127.0.0.1';

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, ()=>{
      console.log(`Server running at http://${hostname}:${port}/`);
      console.log(`DB connected`);
    });
  }
});