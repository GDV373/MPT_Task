const express = require('express');
const router = express.Router();
const { getCustomers } = require('../db/queries');

// Endpoint to retrieve customers information
router.get('/customers', async (req, res) => {
    try {
        const customers = await getCustomers();
        res.status(200).json(customers);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve customers' });
    }
});

module.exports = router;
