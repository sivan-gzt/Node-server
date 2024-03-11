const express = require('express');
const router = express.Router();
const cardsRouter = require('../cards/routes/cardsRestController');
const usersRouter = require('../users/routes/usersRestController');

router.use('/card', cardsRouter);
router.use('/user', usersRouter);

module.exports = router;