const express = require("express");
const { create } = require("node:domain");
const { Nums, parse, getArray } = require("./nums");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createNumObject = (req) => {
	const numsStringsArray = getArray(req);
	const numsIntsArray = parse(numsStringsArray);
	const nums = new Nums(numsIntsArray);
	return nums;
};

app.get("/mean", (req, res) => {
	try {
		const nums = createNumObject(req);
		return res.json({
			response: {
				operation: "mean",
				value: nums.mean,
			},
		});
	} catch (err) {
		return next(err);
	}
});

app.get("/median", (req, res) => {
	try {
		const nums = createNumObject(req);
		return res.json({
			response: {
				operation: "median",
				value: nums.median,
			},
		});
	} catch (err) {
		return next(err);
	}
});

app.get("/mode", (req, res) => {
	try {
		const nums = createNumObject(req);
		return res.json({
			response: {
				operation: "mode",
				value: nums.mode,
			},
		});
	} catch (err) {
		return next(err);
	}
});

app.use((err, req, res, next) => {
	res.send(err);
});

app.listen(5000, () => {
	console.log("App on port 5000");
});
