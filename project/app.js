const express = require('express');
const app = express();
const ordersRouter = require('./routes/orders');
const customersRouter = require('./routes/customers');

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', ordersRouter);
app.use('/api', customersRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
