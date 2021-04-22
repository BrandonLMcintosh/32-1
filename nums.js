const { AppError } = require("./appError");

class Nums {
	constructor(arr) {
		this.arr = arr;
		this.mean = this.calcMean(this.arr);
		this.median = this.calcMedian(this.arr);
		this.mode = this.calcMode(this.arr);
	}

	calcMean(arr) {
		const total = arr.reduce((acc, val) => {
			return acc + val;
		});
		const mean = parseFloat((total / arr.length).toFixed(4));
		return mean;
	}

	calcMedian(arr) {
		arr.sort((a, b) => {
			return a - b;
		});
		const half = Math.floor(arr.length / 2);
		if (arr.length % 2) return arr[half];
		return Math.round(((arr[half - 1] + arr[half]) / 2.0) * 1e4);
	}

	calcMode(arr) {
		const sorted = arr.sort();
		const numMap = {};
		let bestFrequency = 0;
		let mode;
		sorted.forEach((num) => {
			numMap[num] = (numMap[num] || 0) + 1;
			if (bestFrequency < numMap[num]) {
				bestFrequency = numMap[num];
				mode = num;
			}
		});
		return mode;
	}
}

parse = (arr) => {
	const numsIntsArray = arr.map((numString) => {
		const numInt = parseInt(numString);
		if (!numInt) {
			throw new AppError("Error: one or more of the numbers in nums cannot be parsed to an integer", 400);
		} else {
			return numInt;
		}
	});

	return numsIntsArray;
};

getArray = (req) => {
	const numsStringsArray = req.query.nums.split(",");
	if (!numsStringsArray) {
		throw new AppError('Error: query "nums" must be present', 400);
	}
	return numsStringsArray;
};

module.exports = { Nums, parse, getArray };
