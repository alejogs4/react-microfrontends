const express = require('express');
const app = express();

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static(`${__dirname}/build`))
app.listen(3001, () => console.log('Running customers microfrontend'))