const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const port = process.env.PORT || 3030;
const hostname = '127.0.0.1';

app.use(require('./routes'));

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