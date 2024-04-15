const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.disable('x-powered-by')
const options = {
  origin: ['http://localhost:3000','http://localhost:3001'],
  methods:['GET','POST','PUT'],
  }
app.use(cors(options))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
require ('./routes/index')(app);
app.use((error, res, next) => {
  res.status(500).json({ message: error.message });
})
app.listen(process.env.NODE_LOCAL_PORT || 5001)
