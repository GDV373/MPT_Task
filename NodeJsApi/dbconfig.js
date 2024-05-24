
const config = {
    user :'test',
    password :'Test1234!',
    server: '127.0.0.1',
    database: 'master',
    options:{
        trustedconnection: true,
        encrypt: false,
        enableArthAort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
}

module.exports = config;