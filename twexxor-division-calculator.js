const _20_0 = {'e': 1, 'E': 1, 'NaN': 1};
const _20_1 = require('twexxor-addition-calculator');
const _20_2 = require('twexxor-quotient-calculator');
const _20_3 = require('twexxor-remainder-calculator');
const _20_4 = require('twexxor-string-repeater');

const twexxorDivisionCalculator = function(_20_5, _20_6, _20_7) {
	_20_5 = [
		_20_1(_20_5, '0'),
		_20_1(_20_6, '0')
	];

	if (_20_5[0] === false || _20_5[1] === '0') {
		return false;
	}

	if (_20_5[0] === '0') {
		return '0';
	}

	if (_20_5[1] === '1') {
		return _20_5[0];
	}

	if (_20_5[0] === _20_5[1]) {
		return '1';
	}

	_20_7 = _20_1(_20_7, '0');

	if (_20_7 === false) {
		_20_7 = 10;
	}

	_20_6 = '';
	let _20_8 = '';
	let _20_9 = [0, 0];
	let _20_10 = 0;
	let _20_11 = 0;
	let _20_12 = 0;
	let _20_13 = 0;
	let _20_14 = 0;

	while (_20_10 !== 2) {
		_20_6 = _20_5[_20_10];
		_20_11 = (_20_6[0] === '-') - 0;
		_20_8 = _20_6.length + '';
		_20_12 += _20_11;
		_20_13 = _20_8.length;
		_20_14 = 0;

		while (_20_13 !== _20_14) {
			if (typeof _20_0[_20_8[_20_14++]] === 'number') {
				return false;
			}
		}

		_20_8 -= 0;
		_20_13 = '';

		while (_20_8 !== _20_11) {
			if (typeof _20_0[_20_6[_20_11]] === 'number') {
				_20_9[_20_10] = _20_6[_20_11++];
				continue;
			}

			_20_13 += _20_6[_20_11++];
		}

		if (_20_9[_20_10] === 0) {
			_20_9[_20_10] = _20_8;
		}

		_20_5[_20_10++] = _20_13;
	}

	_20_6 = '';
	_20_12 &= 1;

	if (_20_12 === 1) {
		_20_6 = '-';
	}

	_20_8 = _20_5[1];
	_20_5 = _20_5[0];
	_20_10 = [
		function() {
			// todo (whole number dividend)
		},
		function() {
			// todo (decimal number dividend)
		}
	];
	return _20_6 + _20_10[(typeof _20_5[_20_9[0]] === 'string') - 0]();
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = twexxorDivisionCalculator;
}
