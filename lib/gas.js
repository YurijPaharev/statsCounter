const interpol = require('./interpolate');
const roundCustom = require('./roundFunction');
const addParam = require('./additionalParametrs');

module.exports = function() {
	// Технологические параметры
	let sootn = [0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1];
	let expl = [0.43, 0.46, 0.5, 0.53, 0.58, 0.63, 0.68, 0.74, 0.8, 0.86, 0.91, 0.97, 1.1];
	let alfa = [1.25, 1.5, 2, 2.5];
	let gas = [1.252, 1.245, 1.23, 1.225];
	// Объявление вентиляторов и дымососов
	let gasSuckerOneParams = { // Наш дымосос первой котельной
		v_Pasp: 3400,
		h_Pasp: 435 * 0.102,
		kpd_Pasp: 0.83,
		k: 1.2,
		t_Pasp: 200,
		b_ki: addParam.b_ki[0],
		Q_ki: addParam.Q_ki[0],
		Qpn: addParam.Q_rn[0],
		V2: 10.68,
		alfaEH: addParam.alfa_dg[0], 
		t: addParam.t_dg[0]
	};

	let gasSuckerTwoParams = { // Наш дымосос второй котельной
		v_Pasp: 6700,
		h_Pasp: 780 * 0.102,
		kpd_Pasp: 0.83,
		k: 1.2,
		t_Pasp: 200,
		b_ki: addParam.b_ki[1],
		Q_ki: addParam.Q_ki[1],
		Qpn: addParam.Q_rn[1],
		V2: 10.68,
		alfaEH: addParam.alfa_dg[1], 
		t: addParam.t_dg[1]
	};

	let conditionOneParams = { // Наш вентилятор первой котельной
		v_Pasp: 4400,
		h_Pasp: 97,
		kpd_Pasp: 0.67,
		k: 1.1,
		t_Pasp: 20,
		b_ki: addParam.b_ki[0],
		Q_ki: addParam.Q_ki[0],
		Qpn: addParam.Q_rn[0],
		V2: 9.52,
		alfaEH: 1.1,
		t: addParam.t_hp[0]
	};

	let conditionTwoParams = { // Наш вентилятор второй котельной
		v_Pasp: 6500,
		h_Pasp: 218,
		kpd_Pasp: 0.67,
		k: 1.1,
		t_Pasp: 20,
		b_ki: addParam.b_ki[1],
		Q_ki: addParam.Q_ki[1],
		Qpn: addParam.Q_rn[1],
		V2: 9.52,
		alfaEH: 1.2,
		t: addParam.t_hp[1]
	};

	let workOfEq = function (workingArguments) { // Расчет основного оборудования
        let Ro = interpol(alfa, workingArguments.alfaEH, gas),
        	k_b = workingArguments.Qpn / 7000,
			pow_Pasp = (workingArguments.v_Pasp * workingArguments.h_Pasp) / (3600 * 102 * workingArguments.kpd_Pasp),
			kRo = (1.293 * (273 + workingArguments.t) * 760) / (Ro * (273 + workingArguments.t_Pasp) * addParam.h_bar),
			v_D = (workingArguments.b_ki * workingArguments.Q_ki * workingArguments.V2 * workingArguments.alfaEH * (273 + workingArguments.t) * 760) / (k_b * 273 * addParam.h_bar),
			_f = (v_D / workingArguments.v_Pasp),
        	k_Eksp = interpol(sootn, _f, expl),
			power = (pow_Pasp * k_Eksp * workingArguments.k) / kRo;

		return roundCustom(power * addParam.n * 24) ;
	};

	// Сводим все составляющие в одно место для полного расчета
	let mainContainer = [gasSuckerOneParams, gasSuckerTwoParams, conditionOneParams, conditionTwoParams];

	// Возвращает сумму расчитаных значений
	return roundCustom(mainContainer.map(m => workOfEq(m)).reduce((a, b) => a + b));
}();