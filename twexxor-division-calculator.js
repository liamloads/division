const _16_0 = {'e': 1, 'E': 1, 'NaN': 1};
const _16_1 = require('twexxor-addition-calculator');
const _16_2 = require('twexxor-quotient-calculator');
const _16_3 = require('twexxor-string-repeater');

const twexxorDivisionCalculator = function(_16_4, _16_5, _16_6) {
	_16_4 = [
		_16_1(_16_4, '0'),
		_16_1(_16_5, '0')
	];

	if (_16_4[0] === false || _16_4[1] === '0') {
		return false;
	}

	if (_16_4[0] === '0') {
		return '0';
	}

	if (_16_4[1] === '1') {
		return _16_4[0];
	}

	if (_16_4[0] === _16_4[1]) {
		return '1';
	}

	_16_6 = _16_1(_16_6, '0');

	if (_16_6 === false) {
		_16_6 = 100;
	}

	_16_5 = '';
	let _16_7 = '';
	let _16_8 = 0;
	let _16_9 = 0;
	let _16_10 = 0;
	let _16_11 = 0;
	let _16_12 = 0;

	while (_16_8 !== 2) {
		_16_5 = _16_4[_16_8];
		_16_9 = (_16_5[0] === '-') - 0;
		_16_7 = _16_5.length + '';
		_16_10 += _16_9;
		_16_11 = _16_7.length;
		_16_12 = _16_9;

		while (_16_11 !== _16_12) {
			if (typeof _16_0[_16_7[_16_12++]] === 'number') {
				return false;
			}
		}

		if (_16_9 === 1) {
			_16_7 -= 0;
			_16_11 = '';

			while (_16_7 !== _16_9) {
				_16_11 += _16_5[_16_9++];
			}

			_16_4[_16_8] = _16_11;
		}

		_16_8++;
	}

	// todo
	_16_5 = _16_4[1];
	_16_4 = _16_4[0];
	_16_6 = _16_2(_16_4, _16_5);
	// todo
	return _16_6;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = twexxorDivisionCalculator;
}
