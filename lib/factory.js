const gasAir = require('./gas');
const rec = require('./rec').recAll;
const crudeWater = require('./crudeWater').crudeAll;
const chemicalCleaner = require('./chemicalCleaner');
const fuelingPump = require('./fuelingPump');
const netPump = require('./netPump');

module.exports = [gasAir, rec, crudeWater, chemicalCleaner, fuelingPump, netPump].reduce((a, b) => a + b ) + '';