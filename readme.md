In development.

``` console
npm install twexxor-division-calculator
```
``` javascript
const twexxorDivisionCalculator = require('twexxor-division-calculator');
twexxorDivisionCalculator('-1000', 34); // '-29'
twexxorDivisionCalculator('-100', 0); // false
twexxorDivisionCalculator('1', '100'); // '0'
twexxorDivisionCalculator('-69', 9); // '-7'
twexxorDivisionCalculator('9', '-69'); // '0'
twexxorDivisionCalculator('-0', '0'); // '0'
twexxorDivisionCalculator('340', '340'); // '1'
twexxorDivisionCalculator('340', '341'); // '0'
twexxorDivisionCalculator('341', '340'); // '1'
twexxorDivisionCalculator(-0.001, 0.00011); // '-9'
twexxorDivisionCalculator('123456789123456789', '1111'); // '111122222433354'
twexxorDivisionCalculator('0.00000000000011111111111111111111111111111111111111111234', '0.00000000000000000000000000000000000000000000000000000000000009'); // '1234567901234567901234567901234567901234581555555'
```
