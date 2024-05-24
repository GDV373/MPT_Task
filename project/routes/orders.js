const express = require('express');
const router = express.Router();
const { getOrders } = require('../db/queries');

// Endpoint to retrieve orders information
router.get('/orders', async (req, res) => {
    try {
        const orders = await getOrders();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve orders' });
    }
});

module.exports = router;
