// TODO: Use Sequelize in here
const Sequelize = require('sequelize');

const connectionUrl = 'postgres://carlpiao:carlpiao@localhost:5432/spotyfi';
const database = new Sequelize(connectionUrl);

const _user = database.define("_user",{
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	fname: {
		type: Sequelize.STRING,
		allowNull: false
	},
    lname: {
        type: Sequelize.STRING,
		allowNull: false
    },
	username: {
		type: Sequelize.STRING,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	}
},{timestamps: true});

const _admin = database.define("_admin",{
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	fname: {
		type: Sequelize.STRING,
		allowNull: false
	},
    lname: {
        type: Sequelize.STRING,
		allowNull: false
    },
	username: {
		type: Sequelize.STRING,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	}
},{timestamps: true});

database.sync();

module.exports._user = _user;
module.exports._admin = _admin;
