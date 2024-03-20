const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const user = await register(user);
        res.status = 201;
        return res.send(user);

    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.get('/:id', async (req, res) => {

});

module.exports = router;