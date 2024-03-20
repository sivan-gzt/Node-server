const chalk = require("chalk");
const express = require("express");
const { handleError } = require("./src/utils/handleErrors");
const app = express();
const router = require("./src/router/router");
const cors = require("./src/middlewares/cors");
const logger = require("./src/services/loggerService");

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(express.static("./public"));
app.use(router);

app.use((err, _req, res, _next) => {
    handleError(res, 500, err.message);
});

const PORT = process.env.PORT || 8181;
app.listen(PORT, () =>
    console.log(chalk.magentaBright(`Listening on: http://localhost:${PORT}`))
);