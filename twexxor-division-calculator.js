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

	_20_7 = _20_1(_20_7, '0') - 0;

	if (_20_7 === false) {
		_20_7 = 10;
	}

	_20_6 = '';
	let _20_8 = '';
	let _20_9 = ['', ''];
	let _20_10 = [0, 0];
	let _20_11 = 0;
	let _20_12 = 0;
	let _20_13 = 0;
	let _20_14 = 0;
	let _20_15 = 0;

	while (_20_11 !== 2) {
		_20_6 = _20_5[_20_11];
		_20_12 = (_20_6[0] === '-') - 0;
		_20_8 = _20_6.length + '';
		_20_13 += _20_12;
		_20_14 = _20_8.length;
		_20_15 = 0;

		while (_20_14 !== _20_15) {
			if (typeof _20_0[_20_8[_20_15++]] === 'number') {
				return false;
			}
		}

		_20_8 -= 0;
		_20_14 = _20_12;
		_20_15 = '';
		_20_10[_20_11] = _20_8 - _20_12;

		while (_20_8 !== _20_14) {
			_20_15 += _20_6[_20_14];

			if (typeof _20_0[_20_6[_20_14] - 0] === 'number') {
				_20_10[_20_11] = _20_14++ - _20_12;
				continue;
			}

			_20_9[_20_11] += _20_6[_20_14++];
		}

		_20_5[_20_11++] = _20_15;
	}

	_20_6 = '';
	_20_13 &= 1;

	if (_20_13 === 1) {
		_20_6 = '-';
	}

	_20_8 = _20_5[1];
	_20_5 = _20_5[0];
	_20_11 = _20_2(_20_5, _20_8);

	if (_20_7 === '0') {
		return _20_6 + _20_11;
	}

	_20_12 = _20_3(_20_5, _20_8);

	if (_20_12 === '0') {
		return _20_6 + _20_11;
	}

	_20_5 = _20_1('-' + _20_5, _20_8);
	_20_12 = 0;

	if (_20_5[0] !== '-') {
		// todo
		_20_5 = _20_8.length + 1;
		_20_13 = 0;

		while (_20_5 !== _20_13) {
			_20_12 = _20_13;

			if (_20_8[_20_13++] === '.') {
				_20_13 = _20_5;
			}
		}

		_20_5 = _20_12;

		if (_20_8[0] === '0') {
			_20_13 = _20_8[_20_5];

			while (_20_13 === '0') {
				_20_13 = _20_8[_20_5++];
			}

			_20_12 = _20_5 - 2;
                }

		_20_12 -= _20_10[0];
	}

	_20_5 = _20_9[0];
	_20_9 = _20_10[0];
	_20_10 = _20_11.length;
	_20_11 = _20_5.length;
	_20_13 = (_20_7 - 0) + _20_9;
	_20_7 = _20_1(_20_7, '-' + _20_1(_20_11, '-' + _20_9));

	if (_20_7[0] !== '-') {
		_20_5 += _20_4('0', _20_7);
		_20_11 += _20_7;
	}

	_20_7 = '';
	_20_9 = 0;

	while (_20_9 !== _20_13) {
		_20_7 += _20_5[_20_9++];
	}

	_20_9 = _20_5.length;

	if (_20_9 !== _20_13) {
		_20_7 += '.';

		while (_20_9 !== _20_13) {
			_20_7 += _20_5[_20_13++];
		}
	}

	_20_5 = _20_2(_20_7, _20_8);

	if (_20_12 !== 0) {
		_20_10 = 1;
		_20_5 = _20_4('0', _20_12) + _20_5;
	}

	_20_7 = 0;

	while (_20_7 !== _20_10) {
		_20_6 += _20_5[_20_7++];
	}

	_20_6 += '.';
	_20_8 = _20_5.length;

	while (_20_7 !== _20_8) {
		_20_6 += _20_5[_20_7++];
	}

	return _20_1(_20_6, '0');
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = twexxorDivisionCalculator;
}
