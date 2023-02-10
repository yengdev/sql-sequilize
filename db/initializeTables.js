const sequelize = require('./db/connection')
require('../model')

sequelize.sync().then(() => {
	console.log('Book table created successfully!');
}).catch((error) => {
	console.error('Unable to create table : ', error);
});