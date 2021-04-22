const { Nums, parse, getArray } = require("./nums");
const { AppError } = require("./appError");

describe("mean function", () => {
	test("should return mean for valid data", () => {
		const arr = [1, 2, 6, 9, 3, 4, 6];
		const set = new Nums(arr);
		expect(set.mean).toEqual(4.4286);
	});
});

describe("median function", () => {
	test("should return median for valid data", () => {
		const arr = [1, 2, 6, 9, 3, 4, 6];
		const set = new Nums(arr);
		expect(set.median).toEqual(4);
	});
});

describe("mode function", () => {
	test("should return mode for valid data", () => {
		const arr = [1, 2, 6, 9, 334, 4, 6];
		const set = new Nums(arr);
		expect(set.mode).toEqual(6);
	});
});

describe("parse function", () => {
	test("should retun valid array of integers if all are parse-able", () => {
		const arr = ["2", "3", "1", "8"];
		const parsedArray = parse(arr);
		expect(parsedArray).toEqual([2, 3, 1, 8]);
	});

	test("should return appError if one of the strings cannot be parsed to int", () => {
		const arr = ["1", "foo", "3", "5"];
		expect(() => {
			parse(arr);
		}).toThrow(AppError);
	});
});
