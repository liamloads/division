const _16_0 = {'NaN': 1};
const _16_1 = require('twexxor-addition-calculator');
const _16_2 = require('twexxor-highest-detector');

const twexxorDivisionCalculator = function(_16_3, _16_4) {
	_16_3 = [
		_16_3,
		_16_4
	];
	_16_4 = 0;
	let _16_5 = 1;

	while (_16_4 !== 2) {
		_16_3[_16_4] += '';

		if (_16_3[_16_4++][0] !== '-') {
			_16_3[_16_4 - 1] = '-' + _16_3[_16_4 - 1];
			_16_5++;
		}
	}

	// todo
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = twexxorDivisionCalculator;
}
