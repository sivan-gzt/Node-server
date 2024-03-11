const express = require('express');
const router = express.Router();

const { getCard, findMyCards, create, update, like, remove, getCards } = require('../../models/cardsAccessData');
const handleError = require('../../utils/handleErrors');

router.get('/', async (req, res) => {
    try {
        const cards = await getCards();
        return res.send(cards);
    } catch (error) {
        return handleErrors(res, error.status || 500, error.message)
    }
});

router.get('/my-cards', async (req, res) => {
    try {
        const userId = '123456';
        const card = await findMyCards(userId);
        return res.send(card);

    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const card = await getCard(req.params.id);
        return res.send(card);
    } catch (error) {
        error.status = 404;
        return handleError(res, error.status || 500, error.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const card = await update(req.params.id);
        return res.send(card);
    } catch (error) {
        error.status = 404;
        return handleError(res, error.status || 500, error.message);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const userId = '123456';
        const card = await like(req.params.id, userId);
        return res.send(card);
    } catch (error) {
        error.status = 404;
        return handleError(res, error.status || 500, error.message);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const card = await remove(req.params.id);
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