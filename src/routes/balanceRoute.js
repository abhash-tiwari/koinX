const express = require('express');
const { calculateBalance } = require('../services/balanceCalculatorService');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const balances = await calculateBalance(req.body.timestamp);
        res.json(balances);
    } catch (error) {
        res.status(500).send('Error calculating balances');
    }
});

module.exports = router;