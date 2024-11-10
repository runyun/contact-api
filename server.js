const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

require('dotenv').config();

// route
const baseRoute = require('./routes/base-route');
app.use('/base', baseRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
