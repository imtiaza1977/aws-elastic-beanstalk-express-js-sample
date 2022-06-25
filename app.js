const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Malik Adeel Imtiaz Full Pipeline has been Deployed'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
