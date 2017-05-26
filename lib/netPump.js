const roundCustom = require('./roundFunction');
const addParam = require('./additionalParametrs');
const crudeWater = require('./crudeWater');
const rec = require('./rec');

module.exports = function() {
    const netPump = { // Сетевые насосы
        Gmer: 1.05 * rec.Gm + crudeWater.GFuel,
        Gnom: 60,
        N: function() {return Math.round(this.Gmer / this.Gnom)},
        GmerPump: function() {return this.Gmer / this.N()},
        kpdE: 0.87,
        kpdN: 0.61,
        kpdM: 0.98,
        H: 60,
        count: function() {
            const Power = (this.GmerPump() * this.H * Math.pow(10,3)) / (3600 * 102 * this.kpdN * this.kpdE * this.kpdM);
            return this.N() * (Power * addParam.n * 24);
        }
    };

    return roundCustom(netPump.count());
}();