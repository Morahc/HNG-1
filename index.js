const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.get('/profile', (req, res) => {
  res.json({
    slackUsername: 'morah stephen',
    backend: true,
    age: 23,
    bio: 'Always pushing for self improvement and development',
  });
});

app.listen(process.env.PORT, () => {
  console.log('Server running ...');
});
