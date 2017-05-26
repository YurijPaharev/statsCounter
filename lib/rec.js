const addParam = require('./additionalParametrs');
const roundCustom = require('./roundFunction');
const arrSum = require('./sumOfArray');

module.exports = function() {
	function CountAllRecPumps(rec) {
		this.tau11 = 70;
		this.c = 1;
		this.tkmin = 70;
		this.tau2 = (this.tkmin - 5);
		this.tau1 =  arrSum(addParam.Q_ki, addParam.t_k_vih) / arrSum(addParam.Q_ki) ;
		this.Ghm = (addParam.Q_mid * (1 + addParam.K_VP) * 1000) / ((this.tau11 - 30) * this.c);
		this.Ghmax = 2.4 * this.Ghm;
		this.Gop = addParam.Q_op_mid * 1000 / ((this.tau1 - this.tau2)*this.c);
		this.Gm = addParam < 10 ? this.Gop + this.Ghmax : this.Gop + 1.2 * this.Ghm;
		this.q_ki = rec.q_ki;
		this.t_ki = rec.t_ki;
		this.Hmer = 20;
		this.Wzadan = rec.Wzadan;
		this.kpdE = rec.kpdE;
		this.kpdM = rec.kpdM;
		this.kpdN = rec.kpdN;
	}

	// Рециркуляционный насос один
	let recirculPumpOne = new CountAllRecPumps({
        q_ki: addParam.Q_ki[0],
        t_ki: addParam.t_k_vih[0],
        kpdE: 0.82,
        kpdM: 0.98,
        kpdN: 0.76
    });

    // Рециркуляционный насос два
	let recirculPumpTwo = new CountAllRecPumps({
        q_ki: addParam.Q_ki[1],
        t_ki: addParam.t_k_vih[1],
        kpdE: 0.82,
        kpdM: 0.98,
        kpdN: 0.76
    });

	CountAllRecPumps.prototype.workOfRec = function() { // Расчет рециркуляционных насосов
		let Gmi = () => (this.Gm * this.q_ki) / arrSum(addParam.Q_ki);
		let Grec = () => (((Gmi()*(this.tkmin - this.tau2)) / (this.t_ki - this.tkmin)) * (1 - ((this.t_ki - this.tau1) / (this.t_ki - this.tau2))));
		let wRec = () => ((Grec() * this.Hmer * 1000) / (3600 * 102 * this.kpdE * this.kpdN * this.kpdM)) * (addParam.n * 24);
		return wRec();
	};

    let mainContainer = [recirculPumpOne, recirculPumpTwo];

    // Возвращает сумму расчитаных значений
    return {
    	recAll: roundCustom(mainContainer.map(m => m.workOfRec()).reduce((a, b) => a + b)),
        Gm: recirculPumpOne.Gm
	}
}();