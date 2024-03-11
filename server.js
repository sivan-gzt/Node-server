const express = require('express');
const router = require('./router/router');
const app = express();

// parse application/json
app.use(express.json());

app.use(cardsRouter);
app.use(usersRouter);


const PORT = process.env.PORT || 8181;
app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
});