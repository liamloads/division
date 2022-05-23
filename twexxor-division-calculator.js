const _16_0 = {'e': 1, 'E': 1, 'NaN': 1};
const _16_1 = require('twexxor-addition-calculator');
const _16_2 = require('twexxor-quotient-calculator');
const _16_3 = require('twexxor-string-repeater');

const twexxorDivisionCalculator = function(_16_4, _16_5, _16_6) {
	_16_3 = [
		_16_1(_16_3, '0'),
		_16_1(_16_4, '0')
	];

	if (_16_3[0] === false || (_16_4[0] - 0)  === 0) {
		return false;
	}

	if (_16_3[0] === '0') {
		return '0';
	}

	if (_16_3[1] === '1') {
		return _16_3[0];
	}

	if (_16_3[0] === _16_3[1]) {
		return '1';
	}

	_16_5 = _16_1(_16_5, '0');

	if (_16_5 === false) {
		_16_5 = 100;
	}

	_16_4 = 0;
	_16_6 = 0;
	// todo
	_16_6 = _16_2(_16_3[0], _16_3[1]);
	// todo
	return _16_6;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = twexxorDivisionCalculator;
}
