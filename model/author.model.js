const { DataTypes } = require('sequelize')
const sequelize = require('../db/connection')

const Author = sequelize.define("authors", {
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	author: {
		type: DataTypes.STRING,
		allowNull: false
	},
	release_date: {
		type: DataTypes.DATEONLY,
	},
	rate: {
		type: DataTypes.INTEGER,
	}
});

module.exports = { Author }