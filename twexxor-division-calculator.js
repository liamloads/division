const _16_0 = {'NaN': 1};
const _16_1 = require('twexxor-addition-calculator');
const _16_2 = require('twexxor-highest-detector');

const twexxorDivisionCalculator = function(_16_3, _16_4) {
	_16_3 = [
		_16_1(_16_3, '0'),
		_16_1(_16_4, '0')
	];
	_16_4 = [];
	let _16_5 = 0;
	let _16_6 = 0;

	while (_16_5 !== 2) {
		if (_16_3[_16_5][0] !== '-') {
			_16_3[_16_5] = '-' + _16_3[_16_5];
			_16_6++;
		}

		_16_4[_16_5] = _16_3[_16_5++].length;
	}

	// todo
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = twexxorDivisionCalculator;
}
