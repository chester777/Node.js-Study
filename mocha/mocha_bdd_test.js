// you should use 'mocha' command to run
// ex. mocha mocha_bdd_test.js

var assert = require("assert");
var Atm = require("./atm");
var atm = new Atm(5000);

describe('Feature : get cash from an ATM :', function() {
	context('Scenario : success', function() {
		describe('When the user asks the ATM for 500', function() {
			assert.equal(atm.withDraw(500));

			it('Then the ATM will have 500', function() {
				assert.equal(atm.AtmRemainingCash(), 500);
			});

			it("Then the user's account will have 4500", function(done) {
				assert.equal(atm.getAccount(), 4500);
				done();
			});
		});
	});
});