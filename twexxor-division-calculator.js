const _16_0 = {'NaN': 1};
const _16_1 = require('twexxor-addition-calculator');
const _16_2 = require('twexxor-highest-detector');
const _16_3 = require('twexxor-string-repeater');

const twexxorDivisionCalculator = function(_16_4, _16_5) {
	_16_4 = [
		_16_1(_16_4, '0'),
		_16_1(_16_5, '0')
	];

	if (_16_4[0] === false || _16_4[1] - 0 === 0) {
		return false;
	}

	_16_5 = '0';

	while (_16_5 !== 2) {
		_16_5 += '';

		if (_16_4[_16_5] === _16_5) {
			return _16_4[_16_5];
		}

		_16_5++;
	}

	_16_5 = '';
	let _16_6 = [];
	let _16_7 = [];
	let _16_8 = [0, 0];
	let _16_9 = 0;
	let _16_10 = 0;
	let _16_11 = 0;

	while (_16_9 !== 2) {
		_16_5 = _16_4[_16_9];

		if (_16_5[0] !== '-') {
			_16_5 = '-' + _16_5;
			_16_4[_16_9] = _16_5;
			_16_10++;
		}

		_16_6[_16_9] = _16_5.length;
		_16_7[_16_9] = '';
		_16_10 = _16_6[_16_9];
		_16_11 = 1;

		while (_16_11 !== _16_10) {
			if (typeof _16_0[_16_4[_16_9][_16_11] - 0] === 'number') {
				_16_8[_16_9] = _16_6[_16_9]-- - _16_11++;
				continue;
			}

			_16_7[_16_9] += _16_4[_16_9][_16_11++];
		}

		_16_9++;
	}

	_16_9 = 0;
	_16_10 = 0;
	_16_11 = 0;

	if (_16_8[0] !== _16_8[1]) {
		_16_5 = _16_8[0];
		_16_5 += '';
		_16_9 = _16_2([_16_8[0], _16_8[1]]);
		_16_10 = (_16_5 === _16_9) - 0;
		_16_11 = _16_9 - _16_8[_16_10];
		_16_10 = 0;

		while (_16_10 !== 2) {
			_16_7[_16_10++] += _16_3('0', _16_11);
		}
	}

	if (_16_7[1] === _16_2([_16_7[0], _16_7[1]])) {
		// todo
	}

	// todo
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = twexxorDivisionCalculator;
}
