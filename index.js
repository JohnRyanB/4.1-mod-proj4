const dotenv = require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");
const path = require("path");
const Users = require("./users");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

// app.use("/api/*", (req, res) => {
// 	res.json({ data: "This is the API data" });
// });

app.get("/api/users/", (req, res) => {
	Users.findAll()
		.then((users) => {
			console.log(users);
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(500).json({ message: err.message });
		});
});

app.use("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/api/login/", (req, res) => {
	const loggedUser = req.body;
	if (!loggedUser.username || !loggedUser.password) {
		res.status(422).json("must enter username and password");
	} else {
		Users.login(loggedUser)
			.then((user) => {
				console.log(user);
				res.json(user);
			})
			.catch((err) => {
				res.status(500).json({ message: err.message });
			});
	}
});

app.post("/api/users/", (req, res) => {
	const newUser = req.body;
	if (!newUser.username || !newUser.password) {
		res.status(422).json("must enter username and password");
	} else {
		Users.createUser(newUser)
			.then((user) => {
				console.log(user);
				res.json(user);
			})
			.catch((err) => {
				res.status(500).json({ message: err.message });
			});
	}
});

app.listen(port, () => {
	console.log(`Server alive on port ${port}`);
});

// console.log("it's alive");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME);
// console.log(process.env.PORT);
// console.log(process.env.DB_PASS);
