const { sql, poolPromise } = require('./connection');

// Function to get orders information
const getOrders = async () => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query(`
            SELECT o.order_id, b.title, a.name AS author, b.price, od.quantity
            FROM Orders o
            JOIN OrderDetails od ON o.order_id = od.order_id
            JOIN Books b ON od.book_id = b.book_id
            JOIN Authors a ON b.author_id = a.author_id
        `);
        return result.recordset;
    } catch (err) {
        console.error('SQL error', err);
    }
};

// Function to get customers information
const getCustomers = async () => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query(`
            SELECT name, email, address FROM Customers
        `);
        return result.recordset;
    } catch (err) {
        console.error('SQL error', err);
    }
};

module.exports = {
    getOrders,
    getCustomers
};
