const express = require('express');
const loginController = require('./controllers/login.controller');
const authenticate = require('./middlewares/authenticate');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...
console.log('teste', loginController.login);

app.post('/login', authenticate, loginController.login);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
