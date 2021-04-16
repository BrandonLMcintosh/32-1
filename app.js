const express = require("express");
const Nums = require("./nums");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/mean", (req, res) => {
	try {
		if (nums) {
		}
		res.send(req.query);
	} catch (err) {
		return next(err);
	}
});

app.get("/median", (req, res) => {
	try {
		if (nums) {
		}
		res.send(req.query);
	} catch (err) {
		return next(err);
	}
});

app.get("/mode", (req, res) => {
	try {
		if (nums) {
		}
		res.send(req.query);
	} catch (err) {
		return next(err);
	}
});

app.use((err, req, res, next) => {
	res.send("An error occurred");
});

app.listen(5000, () => {
	console.log("App on port 5000");
});
