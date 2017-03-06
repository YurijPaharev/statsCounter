const addParam = require('./additionalParametrs');
const roundCustom = require('./roundFunction');
const crudeWater = require('./crudeWater');

module.exports = function () {
    const fuelingPump = { // Насосы подпитывающие
        Gnom: 25,
        GseasFuel: crudeWater.GFuel * addParam.n * 24,
        TrobSeas: function() { return this.GseasFuel / this.Gnom },
        kpdKR: 0.015,
        kpdFuel: 0,
        kpdPasp: 0.6,
        kpdNom: function() { return this.kpdPasp - this.kpdKR - this.kpdFuel },
        kpdE: 0.92,
        kpdM: 0.98,
        H: 25,
        count: function() {
            let Power = (this.Gnom * this.H * Math.pow(10,3)) / (3600 * 102 * this.kpdNom() * this.kpdE * this.kpdM);
            return Power * this.TrobSeas();
        }
    };

    return roundCustom(fuelingPump.count());
}();