const _16_0 = {'e': 1, 'E': 1, 'NaN': 1};
const _16_1 = require('twexxor-addition-calculator');
const _16_2 = require('twexxor-highest-detector');
const _16_3 = require('twexxor-string-repeater');

const twexxorDivisionCalculator = function(_16_4, _16_5, _16_6, _16_7) {
	_16_4 = [
		_16_1(_16_4, '0'),
		_16_1(_16_5, '0')
	];

	if (_16_4[0] === false || _16_4[1] - 0 === 0) {
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

	if (typeof _16_6 === 'undefined') {
		_16_6 = 10;
	}

	if (typeof _16_7 === 'undefined') {
		_16_6 += 5;
	}

	_16_5 = '';
	let _16_8 = [];
	let _16_9 = [];
	let _16_10 = [0, 0];
	let _16_11 = 0;
	let _16_12 = 0;
	let _16_13 = 0;
	let _16_14 = 0;

	while (_16_11 !== 2) {
		_16_5 = _16_4[_16_11];

		if (_16_5[0] !== '-') {
			_16_5 = '-' + _16_5;
			_16_4[_16_11] = _16_5;
			_16_12++;
		}

		_16_8[_16_11] = _16_5.length + '';
		_16_13 = _16_8.length;
		_16_14 = 0;

		while (_16_14 !== _16_13) {
			if (typeof _16_0[_16_8[_16_11][_16_14++]] === 'number') {
				return false;
			}
		}

		_16_9[_16_11] = '';
		_16_12 = _16_8[_16_11]--;
		_16_13 = 1;

		while (_16_13 !== _16_12) {
			if (typeof _16_0[_16_4[_16_11][_16_13] - 0] === 'number') {
				_16_10[_16_11] = _16_8[_16_11]-- - _16_13++;
				continue;
			}

			_16_9[_16_11] += _16_4[_16_11][_16_13++];
		}

		if (_16_5[1] === '0') {
			_16_8[_16_11] = _16_1(_16_8[_16_11], '-1');
			_16_9[_16_11] = _16_1(_16_9[_16_11], '0');
		}

		_16_11++;
	}

	_16_5 = 0;
	_16_11 = 0;
	_16_12 = 0;
	_16_13 = 0;

	if (_16_10[0] + _16_10[1] !== 0) {
		_16_5 = _16_2([_16_10[0], _16_10[1]]);
		_16_11 = _16_10[0] + '';
		_16_12 = (_16_5 === _16_11) - 0;
		_16_13 = _16_5 - _16_10[_16_12];
		_16_5 -= 0;
		_16_8[_16_12] += _16_13;
		_16_9[_16_12] += _16_3('0', _16_13);
	}

	if (_16_9[1] === _16_2([_16_9[0], _16_9[1]])) {
		_16_11 = _16_8[1] - _16_8[0];
		_16_9[0] += _16_3('0', _16_11);
		_16_5 += _16_11;
	}

	_16_8 = _16_2(_16_9);

	if (_16_8 === _16_9[1]) {
		_16_4[0] = '';
		_16_5 += 1;
		_16_9[0] += '0';
	}

	_16_8 = _16_9[1];
	_16_10 = _16_8;
	_16_11 = _16_9[0];
	_16_12 = 0;
	_16_13 = 0;
	_16_14 = 0;
	let _16_15 = 1;
	let _16_16 = 0;
	let _16_17 = true;

	while (_16_17 === true) {
		_16_10 = _16_1(_16_10, _16_10);
		_16_12 = _16_1(_16_10, _16_14);
		_16_13 = _16_1(_16_12, '-' + _16_11);

		if (_16_13[0] === '-') {
			_16_14 = _16_12;
			_16_15 += _16_15;
			_16_16 = _16_1(_16_16, _16_15);
			continue;
		}

		_16_10 = _16_8;
		_16_12 = _16_1(_16_10, _16_14);
		_16_13 = _16_1(_16_12, '-' + _16_11);

		if (_16_13[0] === '-') {
			_16_14 = _16_12;
			_16_15 = 1;
			_16_16 = _16_1(_16_16, '1');
			continue;
		}

		_16_17 = false;
	}

	if (_16_4[0] === '') {
		_16_16 = '0' + _16_16;
	}

	_16_8 = _16_1(_16_8, _16_14);

	if (_16_8 === _16_11) {
		return _16_1(_16_16, '1');
	}

	_16_8 = _16_1(_16_11, '-' + _16_14);
	_16_9 = _16_8.length;
	_16_10 = _16_9 - _16_5;
	_16_11 = _16_10 + '';
	_16_12 = '';
	_16_13 = 0;

	if (_16_11[0] !== '-') {
		while (_16_13 !== _16_10) {
			_16_12 += _16_8[_16_13++];
		}
	}

	if (_16_5 !== 0 && _16_9 !== _16_13) {
		_16_12 += '.';
	}

	while (_16_13 !== _16_9) {
		_16_12 += _16_8[_16_13++];
	}

	_16_6 = _16_1(_16_6, '-1');

	if (_16_11[1] === '2' && _16_11[0] === '-' && _16_4[0] !== '') {
		_16_6 = _16_1(_16_6, '-1');
		_16_16 += '0';
	}

	_16_9 = _16_1(_16_6, '-1');

	if (_16_9[0] !== '-') {
		_16_8 = _16_16 + twexxorDivisionCalculator(_16_12, _16_4[1], _16_6, 1);
	}

	if (typeof _16_7 === 'undefined') {
		// todo
	}

	return _16_8;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = twexxorDivisionCalculator;
}
