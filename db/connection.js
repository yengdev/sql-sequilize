const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase', 'root', '', {
	host: '127.0.0.1',
	dialect: 'mysql'
});

sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch((error) => {
	console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize;