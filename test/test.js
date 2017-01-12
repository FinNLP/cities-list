const cities = require("../index.json");
const assert = require("assert");
describe('Cities list', function () {
	it('Length', function () {
		assert.equal(cities.length>79000,true);
		this.test.title = `Length: ${cities.length}`;
	});
	it('indexOf', function () {
		assert.equal(!!~cities.indexOf("leeds"),true);
		assert.equal(!!~cities.indexOf("reading"),true);
	});
});