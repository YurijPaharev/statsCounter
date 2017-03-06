const roundCustom = require('./roundFunction');
const addParam = require('./additionalParametrs');

module.exports = function() {
    const chemicalClean = { // Насосы хим-водо очистки
        identifier: true,
        saltP: 2.2,
        filterP: 3,
        k_p: 0.7,
        cleanTime: addParam.n * 24 * 0.1,
        count: function() {
            return ((this.saltP + this.filterP) * this.k_p * this.cleanTime);
        }
    };

    return roundCustom(chemicalClean.count());
}();