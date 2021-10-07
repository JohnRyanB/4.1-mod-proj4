const dotenv = require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/*", (req, res) => {
	res.json({ data: "This is the API data" });
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
