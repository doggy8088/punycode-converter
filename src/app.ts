
// const punycode = require('punycode');
// const punycode = require('punycode/');
// import punycode = require('punycode');
// import * as punycode from 'punycode';
// import * as punycode from 'punycode/';

import punycode = require('punycode/');
import express from 'express';

const app = express();
const port = 3000;

// http://localhost:3000/toUnicode?str=xn--cssyd
app.get('/toUnicode', (req, res) => {
    res.send(punycode.toUnicode(req.query['str'].toString()));
});

// http://localhost:3000/toASCII?str=多奇
app.get('/toASCII', (req, res) => {
    res.send(punycode.toASCII(req.query['str'].toString()));
});

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
