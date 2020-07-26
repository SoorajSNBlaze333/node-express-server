// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// declarations
const port = 8000;
const app = express();

// module usage
app.use(express.json());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(cors());

// get method
app.get('/get-url', (req, res) => {
  const { query }  = req;
  if (query) {
    return res.status(200).json({ result: "Success" })
  }
  return res.status(500).json({ result: "Error" })
})

// post method
app.get('/post-url', (req, res) => {
  const { body }  = req;
  if (body) {
    return res.status(200).json({ result: "Success" })
  }
  return res.status(500).json({ result: "Error" })
})


// listen to the port
app.listen(port, () => console.log(`Started server at http://localhost:${port}`))