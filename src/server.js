const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const port = process.env.PORT || 3333;
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

//not found
app.use((request, response, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

//catch all
app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({ error: error.message });
});

app.listen(port, () => console.log("Server is running on port ", port));