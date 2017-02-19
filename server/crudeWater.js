const addParam = require('./additionalParametrs');
const rec = require('./rec');
const roundCustom = require('./roundFunction');

module.exports = function() {
    const crudeWater = { // Насосы сырой воды
        Vpit: 15.1,
        k: 0.015,
        k_pidj: 0.0025,
        gamma: 0.99,
        Vzovn: 173.383,
        kpdE: 0.82,
        kpdN: 0.7,
        kpdM: 0.98,
        H: 27.5,
        GFuel: function() {
            return (this.k_pidj * this.gamma * (this.Vpit * (1-addParam.K_VP) * addParam.Q_op_mid + this.Vzovn));
        },
        Gcw: function() {
            return (1.2 * (this.GFuel() + this.k * rec.Gm));
        },
        count: function() {
            return ((this.Gcw() * this.H * 1000)/(3600 * 102 * this.kpdE * this.kpdN * this.kpdM))*(addParam.n * 24);
        }
    };

    return {
        crudeAll: roundCustom(crudeWater.count()),
        GFuel: crudeWater.GFuel()
    }
}();
