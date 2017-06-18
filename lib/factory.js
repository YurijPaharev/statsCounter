const gasAir = require('./gas');
const rec = require('./rec').recAll;
const crudeWater = require('./crudeWater').crudeAll;
const chemicalCleaner = require('./chemicalCleaner');
const fuelingPump = require('./fuelingPump');
const netPump = require('./netPump');

const factoryTotal = [gasAir,
    rec, crudeWater, chemicalCleaner,
    fuelingPump, netPump].reduce((a, b) => a + b ) + '';


console.log('Please select configuration document: config.json');
console.log('Selected document will be used to make all the calculations');
console.log(
    `Counted values are:
Gas sucker and condition value:
    ${gasAir}
Recycling pump value:
    ${rec}
Crude water pump value:
    ${crudeWater}
Chemical cleaner pump value:
    ${chemicalCleaner}
Fueling pump value:
    ${fuelingPump}
Net pump value:
    ${netPump}
Total counted value:
    ${factoryTotal}
 `);

module.exports = {
    gasAir, 
    rec,
    crudeWater,
    chemicalCleaner,
    fuelingPump,
    netPump
}