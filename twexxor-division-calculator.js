const _16_0 = {'e': 1, 'E': 1, 'NaN': 1};
const _16_1 = require('twexxor-addition-calculator');
const _16_2 = require('twexxor-highest-detector');
const _16_3 = require('twexxor-multiplication-calculator');
// const _16_4 = require('twexxor-quotient-calculator');
const _16_4 = require('twexxor-string-repeater');

const twexxorDivisionCalculator = function(_16_5, _16_6, _16_7) {
	_16_5 = [
		_16_1(_16_5, '0'),
		_16_1(_16_6, '0')
	];

	if (_16_5[0] === false || _16_5[1] - 0 === 0) {
		return false;
	}

	if (_16_5[0] === '0') {
		return '0';
	}

	if (_16_5[1] === '1') {
		return _16_5[0];
	}

	if (_16_5[0] === _16_5[1]) {
		return '1';
	}

	if (typeof _16_7 === 'undefined') {
		_16_7 = 10;
	}

	_16_6 = '';                                                                                                                          let _16_8 = [];
	let _16_9 = [];
	let _16_10 = 0;
	let _16_11 = 0;
	let _16_12 = 0;
	let _16_13 = 0;
	let _16_14 = 0;
	let _16_15 = 0;
	let _16_16 = 0;

	while (_16_11 !== 2) {
		_16_6 = _16_5[_16_11];
		_16_12 = (_16_6[0] === '-') - 0;
		_16_13 = _16_6.length + '';
		_16_14 += _16_12;
		_16_15 = _16_13.length;
		_16_16 = 0;

		while (_16_15 !== _16_16) {
			if (typeof _16_0[_16_13[_16_16++]] === 'number') {
				return false;
			}
		}

		_16_6 = _16_5[_16_11];
		_16_13 -= 0;
		_16_15 = '';
		_16_16 = _16_12;

		while (_16_13 !== _16_16) {
			if (typeof _16_0[_16_6[_16_16] - 0] === 'number') {
				_16_10 += _16_13 - _16_16++;
				_16_12++;
				continue;
			}

			_16_15 += _16_6[_16_16++];
		}

		// todo
		_16_8[_16_11] = _16_13 - _16_12;
		_16_9[_16_11++] = _16_15;
	}

	_16_5 = 0;

	while (_16_5 !== 2) {
		_16_11 = _16_9[_16_5];

		if (_16_11[0] === '0') {
			_16_6 = _16_11.length;
			_16_9[_16_5] = _16_1(_16_11, '0');
			_16_9[_16_5] += _16_4('0', _16_6 - _16_9[_16_5].length);
			_16_10--;
		}

		_16_5++;
	}

	if (typeof _16_9[_16_8[1]] === 'undefined') {
		_16_5 = _16_8[1] - _16_8[0] + 1;
		_16_8[0] += _16_5;
		_16_9[0] += _16_4('0', _16_5);
		_16_10 += _16_5;
	}

	_16_5 = _16_9[0];
	_16_6 = _16_9[1];
	_16_8 = '-' + _16_8[1];
	_16_9 = '';
	_16_11 = '';
	_16_12 = '';
	_16_13 = '';
	_16_15 = 0;
	_16_16 = 0;

	while (_16_15 === 0) {
		_16_9 = _16_5[_16_16++];

		if (typeof _16_9 === 'undefined') {
			_16_15 === 1;
			continue;
		}

		_16_11 = _16_1(_16_11 + _16_9, '0');
		_16_12 = _16_1(_16_11.length, _16_8);

		if (_16_12[0] === '-') {
			_16_13 += '0';
			continue;
		}

		// todo
	}

	_16_13 = _16_1(_16_13, '0');
	// todo
	return _16_13;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = twexxorDivisionCalculator;
}
