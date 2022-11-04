const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

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

app.post('/calc', (req, res) => {
  let { operation_type, x, y } = req.body;
  x = Number(x);
  y = Number(y);
  let result;

  if (operation_type.indexOf('add') > -1 || operation_type.indexOf('sum') > -1) {
    result = x + y;
    operation_type = 'addition';
  } else if (operation_type.indexOf('sub') > -1 || operation_type.indexOf('minus') > -1) {
    result = x - y;
    operation_type = 'substraction';
  } else if (operation_type.indexOf('multi') > -1 || operation_type.indexOf('product') > -1) {
    result = x * y;
    operation_type = 'multiplication';
  } else {
    return res.json({ details: "Something went wrong"}).status(400)
  }

  res.json({
    slackUsername: 'morah stephen',
    operation_type,
    result,
  });
});

app.listen(process.env.PORT, () => {
  console.log('Server running ...');
});
