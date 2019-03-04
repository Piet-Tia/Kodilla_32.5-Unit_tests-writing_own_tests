const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');


describe('calculateDistancePoints', () => {
	describe('normal hill size', () => {
		it('should be equal', () => {
			const actual = calculateDistancePoints(130 , 'normal' , 120);

			const expected = '80';

			assert.equal(actual, expected);
		});
	});

	describe('flying hill size', () => {
		it('should also equal', () => {
			const actual = calculateDistancePoints(195, 'flying' , 200);

			const expected = '114';

			assert.equal(actual, expected);
		});
	});
});
