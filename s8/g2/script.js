var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    //deposito:number;
    function SonAccount(balanceInit) {
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function () {
        var input1 = document.querySelector('#conto1');
        var import1 = Number(input1.value);
        this.balanceInit += import1;
        document.querySelector('#importo1').innerHTML = 'il saldo è: ' + this.balanceInit;
    };
    SonAccount.prototype.oneWithDraw = function () {
        var input1 = document.querySelector('#conto1');
        var import1 = Number(input1.value);
        this.balanceInit -= import1;
        document.querySelector('#importo1').innerHTML = 'il saldo è: ' + this.balanceInit;
    };
    return SonAccount;
}());
var bancaUno = new SonAccount(0);
document.querySelector('#importo1').innerHTML = ' il saldo è: ' + bancaUno.balanceInit;
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit, interessi) {
        var _this = _super.call(this, balanceInit) || this;
        _this.interessi = interessi;
        return _this;
    }
    MotherAccount.prototype.twoDeposit = function () {
        var input2 = document.querySelector('#conto2');
        var import2 = Number(input2.value);
        this.balanceInit += import2;
        var interessi = Number(Math.floor(input2.value) * 1.1);
        document.querySelector('#importo2').innerHTML = 'il saldo è: ' + this.balanceInit;
        document.querySelector('#interessi').innerHTML = ' il saldo con interessi è: ' + interessi;
    };
    MotherAccount.prototype.twoWithDraw = function () {
        var input2 = document.querySelector('#conto2');
        var import2 = Number(input2.value);
        this.balanceInit -= import2;
        document.querySelector('#importo2').innerHTML = 'il saldo è: ' + this.balanceInit;
    };
    MotherAccount.prototype.addInterest = function () {
        var input2 = document.querySelector('#conto2');
        var import2 = Number(input2.value);
        this.balanceInit += import2;
        var interessi = Number(Math.floor(this.balanceInit) * 1.1);
        document.querySelector('#interessi').innerHTML = ' il saldo con interessi è: ' + interessi;
    };
    return MotherAccount;
}(SonAccount));
var bancaDue = new MotherAccount(0, 0);
document.querySelector('#importo2').innerHTML = ' il saldo è: ' + bancaDue.balanceInit;
var versamento = document.querySelector('#versamento');
versamento.addEventListener('click', function () {
    bancaUno.oneDeposit();
    var input1 = document.querySelector('#conto1');
    input1.value = '';
    bancaDue.twoDeposit();
    bancaDue.addInterest();
    var input2 = document.querySelector('#conto2');
    input2.value = '';
});
var prelievo = document.querySelector('#prelievo');
prelievo.addEventListener('click', function () {
    bancaUno.oneWithDraw();
    var input1 = document.querySelector('#conto1');
    input1.value = '';
    bancaDue.twoWithDraw();
    var input2 = document.querySelector('#conto2');
    input2.value = '';
});
//let prelievo = document.querySelector('#prelievo')
//let input = document.querySelector('#conto1');
