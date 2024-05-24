var config = require('./dbconfig');
const sql = require('mssql');


async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let orders = await pool.request().query(`
            SELECT 
                o.order_id,
                b.title AS book_title,
                a.name AS author_name,
                b.price,
                od.quantity
            FROM 
                Orders o
                JOIN OrderDetails od ON o.order_id = od.order_id
                JOIN Books b ON od.book_id = b.book_id
                JOIN Authors a ON b.author_id = a.author_id
        `);
        return orders.recordsets;
    } catch (error) {
        console.log(error);
    }
}


async function getCustomers() {
    try {
        let pool = await sql.connect(config);
        let orders = await pool.request().query(`
            SELECT * FROM Customers`);
        return orders.recordsets;
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getOrders : getOrders,
    getCustomers : getCustomers
}
