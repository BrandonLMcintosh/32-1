const AppError = require("./appError");

class Nums {
	constructor(req) {
		this.req = req;
		this.arr = parse(this.req);
		this.mean = this._mean(this.arr);
		this.median = this._median(this.arr);
		this.mode = this._mode(this.arr);
	}

	parse = (req) => {
		try {
			const numsStringArray = req.query.nums.split(",");
			if (!numStrings) {
				throw new AppError('Error: query "nums" must be present', 400);
			}

			numsIntString = numsStringArray.map((numString) => {
				numInt = parseInt(numString);
				if (numInt) {
					throw new AppError(
						"Error: one or more of the numbers in nums cannot be parsed to an integer",
						400
					);
				} else {
					return numInt;
				}
			});

			return numStrings;
		} catch (err) {
			console.log(err);
		}
	};

	_mean = (arr) => {};

	_median = (arr) => {};

	_mode = (arr) => {};
}

module.exports = { Nums };
