const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Add this line to import the path module

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
app.post('/calculate', (req, res) => {
  const { input1, input2 } = req.body;
  const result = Number(input1) + Number(input2); // Change this to perform the desired calculation

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
