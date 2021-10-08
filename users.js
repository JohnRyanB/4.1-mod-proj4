const { nanoid } = require("nanoid");

function getId() {
	return nanoid().slice(0, 5);
}

let users = [
	{ id: getId(), username: "gul", password: "rak" },
	{ id: getId(), username: "test", password: "password" },
];

module.exports = {
	async findAll() {
		return users;
	},

	async createUser({ username, password }) {
		const newUser = { id: getId(), username, password };
		users.push(newUser);
		return newUser;
	},

	async login(creds) {
		// const loginUser = {username, password}
		const loggedUser = creds;
		loggedUser = users.find(
			(loggedUser) =>
				loggedUser.username === username && loggedUser.password === password
		);
		if (!loggedUser) {
			return null;
		} else {
			return loggedUser;
		}
	},
};
