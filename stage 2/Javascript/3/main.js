var Calculator = {
    btn_0: document.getElementById("btn-0"),
    btn_1: document.getElementById("btn-1"),
    btn_2: document.getElementById("btn-2"),
    btn_3: document.getElementById("btn-3"),
    btn_4: document.getElementById("btn-4"),
    btn_5: document.getElementById("btn-5"),
    btn_6: document.getElementById("btn-6"),
    btn_7: document.getElementById("btn-7"),
    btn_8: document.getElementById("btn-8"),
    btn_9: document.getElementById("btn-9"),
    btn_plus: document.getElementById("btn-plus"),
    btn_minus: document.getElementById("btn-minus"),
    btn_mult: document.getElementById("btn-mult"),
    btn_eq: document.getElementById("btn-eq"),
    btn_cl: document.getElementById("btn-cl"),
    x1: document.getElementById("x1"),
    x2: document.getElementById("x2"),
    currentOperator: "",
    eqPhrase: "=",
    isEqPressed: false,
    ButtonNum(btn) {
        if(this.isEqPressed){
            this.clear();
            this.isEqPressed = false;
        }
        this.x1.value += btn;
    },
    checkOperator(btn) {
        if (!this.currentOperator) {
            this.currentOperator = btn;
            this.ButtonNum(btn);
        }
    },
    calculate() {
        this.x2.value = this.eqPhrase + eval(this.x1.value);
        this.isEqPressed = true;
    },
    clear() {
        this.currentOperator = "";
        this.x1.value = "";
        this.isEqPressed = false;
    }
};

var checkPlus = Calculator.checkOperator.bind(Calculator, "+");
var checkMinus = Calculator.checkOperator.bind(Calculator, "-");
var checkMult = Calculator.checkOperator.bind(Calculator, "*");

Calculator.btn_0.addEventListener('click', function () {
    setTimeout(Calculator.ButtonNum.bind(Calculator, 0), 1);
})

Calculator.btn_1.addEventListener('click', function () {
    setTimeout(Calculator.ButtonNum.bind(Calculator, 1), 1);
})

Calculator.btn_2.addEventListener('click', function () {
    setTimeout(Calculator.ButtonNum.bind(Calculator, 2), 1);
})

Calculator.btn_3.addEventListener('click', function () {
    setTimeout(Calculator.ButtonNum.bind(Calculator, 3), 1);
})

Calculator.btn_4.addEventListener('click', function () {
    setTimeout(Calculator.ButtonNum.bind(Calculator, 4), 1);
})

Calculator.btn_5.addEventListener('click', function () {
    setTimeout(Calculator.ButtonNum.bind(Calculator, 5), 1);
})

Calculator.btn_6.addEventListener('click', function () {
    setTimeout(Calculator.ButtonNum.bind(Calculator, 6), 1);
})

Calculator.btn_7.addEventListener('click', function () {
    setTimeout(Calculator.ButtonNum.bind(Calculator, 7), 1);
})

Calculator.btn_8.addEventListener('click', function () {
    setTimeout(Calculator.ButtonNum.bind(Calculator, 8), 1);
})

Calculator.btn_9.addEventListener('click', function () {
    setTimeout(Calculator.ButtonNum.bind(Calculator, 9), 1);
})

Calculator.btn_plus.addEventListener('click', function () {
    (function () {
        checkPlus();
    })();
})

Calculator.btn_minus.addEventListener('click', function () {
    (function () {
        checkMinus();
    })();
})

Calculator.btn_mult.addEventListener('click', function () {
    (function () {
        checkMult();
    })();
})

Calculator.btn_cl.addEventListener('click', function () {
    (function () {
        Calculator.clear();
    })();
})

Calculator.btn_eq.addEventListener('click', function () {
    (function () {
        setTimeout(function () {
            Calculator.calculate();
        }, 1);
    })();
})