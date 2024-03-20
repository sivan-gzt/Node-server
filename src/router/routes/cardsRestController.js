const express = require('express');
const router = express.Router();
const { handleError } = require('../../utils/handleErrors');
const cardService = require('../../services/cardService');
const normalizeCard = require('../../utils/cards/normalizeCard');


router.get('/', async (req, res) => {
    try {
        const cards = await cardService.getCards();
        return res.send(cards);
    } catch (error) {
        return handleError(res, error.status || 500, error.message)
    }
});

router.get('/my-cards', async (req, res) => {
    try {
        const userId = '123456';
        const card = await cardService.getMyCards(userId);
        return res.send(card);

    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const card = await cardService.getCard(req.params.id);
        return res.send(card);
    } catch (error) {
        error.status = 404;
        return handleError(res, error.status || 500, error.message);
    }
});


router.post('/', async (req, res) => {
    try {
        let card = { ...req.body };
        const { error } = cardService.validateCard(card);
        if (error) {
            return handleError(res, 400, error.details[0].message);
        }

        card = await normalizeCard(card);
        card = await cardService.createCard(card);
        return res.status(201).send(card);

    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});


router.put('/:id', async (req, res) => {
    try {
        const card = await cardService.updateCard(req.params.id);
        return res.send(card);
    } catch (error) {
        error.status = 404;
        return handleError(res, error.status || 500, error.message);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const userId = '123456';
        const card = await cardService.likeCard(req.params.id, userId);
        return res.send(card);
    } catch (error) {
        error.status = 404;
        return handleError(res, error.status || 500, error.message);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const card = await cardService.deleteCard(req.params.id);
        return res.send(card);
    } catch (error) {
        error.status = 404;
        return handleError(res, error.status || 500, error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const card = await create(req.body);
        return res.send(card);
    } catch (error) {
        error.status = 404;
        return handleError(res, error.status || 500, error.message);
    }
});

module.exports = router;