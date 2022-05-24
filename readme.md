In development.

``` console
npm install twexxor-division-calculator
```
``` javascript
const twexxorDivisionCalculator = require('twexxor-division-calculator');
twexxorDivisionCalculator('-1000', 34); // '-29.4117647058'
twexxorDivisionCalculator('-1000', 34, 0); // '-29'
twexxorDivisionCalculator('-1000', 34, 51); // '-29.411764705882352941176470588235294117647058823529411'
twexxorDivisionCalculator('-100', 0); // false
twexxorDivisionCalculator('1', '100'); // '0.01'
twexxorDivisionCalculator('-69', 9); // '-7.6666666666'
twexxorDivisionCalculator('9', '-69'); // '-0.1304347826'
twexxorDivisionCalculator('-0', '0'); // false
twexxorDivisionCalculator('340', '340'); // '1'
twexxorDivisionCalculator('340', '341'); // '0.9970674486'
twexxorDivisionCalculator('341', '340');
twexxorDivisionCalculator(-0.001, 0.00011);
twexxorDivisionCalculator('123456789123456789', '1111');
twexxorDivisionCalculator('0.00000000000011111111111111111111111111111111111111111234', '0.00000000000000000000000000000000000000000000000000000000000009');
```
