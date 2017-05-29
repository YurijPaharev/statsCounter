const mongoose = require('mongoose');
const PlantSchema = new mongoose.Schema({
    "variant": Number,
    "Q_max": Number,
    "Q_mid": Number,
    "K_VP": Number,
    "h_bar": Number,
    "t_ot": Number,
    "t_nar": Number,
    "n": Number,
    "Ko": Number,
    "Q_ki": Array,
    "b_ki": Array,
    "Q_rn": Array,
    "t_hp": Array,
    "alfa_dg": Array,
    "t_dg": Array,
    "t_k_vh": Array,
    "t_k_vih": Array
});

mongoose.model('Plant', PlantSchema);

module.exports = mongoose.model('Plant');