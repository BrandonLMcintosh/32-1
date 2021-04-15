const express = require("express");
const Nums = require("./nums");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/mean", (req, res) => {
	if (nums) {
	}
	res.send(req.query);
});

app.get("/median", (req, res) => {});

app.get("/mode", (req, res) => {});

app.listen(5000, () => {
	console.log("App on port 5000");
});
