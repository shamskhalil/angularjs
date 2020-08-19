const express = require('express');
const app = express();

app.use(express.static(__dirname + '/www'));

app.listen(9000, () => {
    console.log('server listening on port 9000');
})