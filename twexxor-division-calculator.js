const _16_0 = {'NaN': 1};
const _16_1 = require('twexxor-addition-calculator');
const _16_2 = require('twexxor-highest-detector');

const twexxorDivisionCalculator = function(_16_3, _16_4) {
	_16_3 = [
		_16_1(_16_3, '0'),
		_16_1(_16_4, '0')
	];
	_16_4 = '';
	let _16_5 = [];
	let _16_6 = [];
	let _16_7 = [0, 0];
	let _16_8 = 0;
	let _16_9 = 0;
	let _16_10 = 0;
	let _16_11 = 0;

	while (_16_8 !== 2) {
		_16_4 = _16_3[_16_8];

		if (_16_4[0] !== '-') {
			_16_4 = '-' + _16_4;
			_16_3[_16_8] = _16_4;
			_16_9++;
		}

		_16_5[_16_8] = _16_4.length;
		_16_6[_16_8] = '';
		_16_9 = _16_5[_16_8];
		_16_10 = 1;

		while (_16_10 !== _16_9) {
			if (typeof _16_0[_16_3[_16_8][_16_10] - 0] === 'number') {
				_16_7[_16_8] = _16_5[_16_8] - _16_10++;
				continue;
			}

			_16_6[_16_8] += _16_3[_16_8][_16_10++];
		}

		_16_8++;
	}

	if (_16_7[0] !== _16_7[1]) {
		// todo
	}

	if (_16_3[1] === _16_2(_16_3[0], _16_3[1])) {
		// todo
	}

	// todo
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = twexxorDivisionCalculator;
}
