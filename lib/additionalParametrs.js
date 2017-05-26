const currentVariant = require('../database/variant47');

module.exports = (function() {
	const data = currentVariant; 
    	Q_gvp = data.Q_mid * 1.2 * 24 * data.n,
		Q_op = data.Q_max * data.Ko,
		Q_usful = Q_gvp + Q_op,
		Q_kot = Q_usful * (1 + data.K_VP),
		Q_kot_mid = Q_kot / (data.n * 24),
		Q_op_mid = Q_kot_mid - data.Q_mid * (1 + data.K_VP),
		Q_pl = data.Q_ki.reduce((a, b) => a + b);

	return {
		Q_max: data.Q_max,
		Q_mid: data.Q_mid,
        Q_op_mid,
        Q_pl,
		h_bar: data.h_bar,
		t_ot: data.t_ot,
		t_nar: data.t_nar,
		n: data.n,
		Ko: data.Ko,
        K_VP: data.K_VP,
		Q_ki: data.Q_ki,
		b_ki: data.b_ki,
		Q_rn: data.Q_rn,
		t_hp: data.t_hp,
		alfa_dg: data.alfa_dg,
		t_dg: data.t_dg,
		t_k_vh: data.t_k_vh,
		t_k_vih: data.t_k_vih
	}
})();