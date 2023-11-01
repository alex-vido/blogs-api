const express = require('express');
const { loginRoute } = require('./routers');
const { userRoute } = require('./routers');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.use('/login', loginRoute);

app.use('/user', userRoute);

app.use('/user/:id', userRoute);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
