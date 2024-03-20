const express = require('express');
const router = express.Router();
const cardsRouter = require('./routes/cardsRestController');
const usersRouter = require('./routes/usersRestController');
const { handleError } = require('../utils/handleErrors');

router.use('/card', cardsRouter);
router.use('/user', usersRouter);

router.use((req, res) => {
    handleError(res, 404, "Page not found!");
});

module.exports = router;