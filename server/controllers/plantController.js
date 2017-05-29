const Plant = require('../../plant/Plant');

module.exports.put_new_var = function(req, res) {
    Plant.create({
        "variant": req.body.variant,
        "Q_max": req.body.Q_max,
        "Q_mid": req.body.Q_mid,
        "K_VP": req.body.K_VP,
        "h_bar": req.body.h_bar,
        "t_ot": req.body.t_ot,
        "t_nar": req.body.t_nar,
        "n": req.body.n,
        "Ko": req.body.Ko,
        "Q_ki": req.body.Q_ki,
        "b_ki": req.body.b_ki,
        "Q_rn": req.body.Q_rn,
        "t_hp": req.body.t_hp,
        "alfa_dg": req.body.alfa_dg,
        "t_dg": req.body.t_dg,
        "t_k_vh": req.body.t_k_vh,
        "t_k_vih": req.body.t_k_vih
    }, 
    function(err, plant) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(plant);
    });  
};

module.exports.get_plants = function(req, res) {
    Plant.find({}, function (err, plants) {
        if (err) return res.status(500).send("There was a problem finding the plants.");
        res.status(200).send(plants);
    });
};

module.exports.get_plant = function(req, res) {
    Plant.findById(req.params.id, function (err, plant) {
        if (err) return res.status(500).send("There was a problem finding the plant.");
        if (!plant) return res.status(404).send("No plant found.");
        res.status(200).send(plant);
    });
}

module.exports.delete_plant = function(req, res) {
    Plant.findByIdAndRemove(req.params.id, function (err, plant) {
        if (err) return res.status(500).send("There was a problem deleting the plant.");
        res.status(200).send("Plant on variant " + plant.variant + " was deleted.");
    });
}

module.exports.update_plant = function(req, res) {
    Plant.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, plant) {
        if (err) return res.status(500).send("There was a problem updating the plant.");
        res.status(200).send(plant);
    });
}