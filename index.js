const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3030;

const routes = express.Router();

routes.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Nola Justiniano');
});

app.use(routes);

app.listen(port, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});