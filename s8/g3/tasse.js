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
var Calculator = /** @class */ (function () {
    function Calculator(redditoannuolordo, tasseinps, tasseirpef) {
        //this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    Calculator.prototype.UtileTasse = function () { };
    Calculator.prototype.TasseInps = function () { };
    Calculator.prototype.TasseIrpef = function () { };
    Calculator.prototype.RedditoAnnuoNetto = function () { };
    return Calculator;
}());
var FasciaUno = /** @class */ (function (_super) {
    __extends(FasciaUno, _super);
    function FasciaUno(redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    FasciaUno.prototype.getUtileTasse = function () {
        var input = document.querySelector('#stipendio');
        var stipendio = Number(input.value);
        return this.getTasseInps() + this.getTasseIrpef();
    };
    FasciaUno.prototype.getTasseInps = function () {
        var input = document.querySelector('#stipendio');
        var stipendio = Number(input.value);
        this.redditoannuolordo = stipendio;
        return (this.redditoannuolordo / 100) * this.tasseinps;
    };
    FasciaUno.prototype.getTasseIrpef = function () {
        var input = document.querySelector('#stipendio');
        var stipendio = Number(input.value);
        this.redditoannuolordo = stipendio;
        return (this.redditoannuolordo / 100) * this.tasseirpef;
    };
    FasciaUno.prototype.getRedditoAnnuoNetto = function () {
        var input = document.querySelector('#stipendio');
        var stipendio = Number(input.value);
        this.redditoannuolordo = stipendio;
        return this.redditoannuolordo -= this.getUtileTasse();
    };
    return FasciaUno;
}(Calculator));
var StipendioUno = new FasciaUno(stipendio, 15, 23);
var StipendioDue = new FasciaUno(stipendio, 24, 35);
var StipendioTre = new FasciaUno(stipendio, 24, 48);
var input = document.querySelector('#stipendio');
var stipendio = Number(input.value);
var calcola = document.querySelector('#btnCalcola');
calcola.addEventListener('click', function () {
    var input = document.querySelector('#stipendio');
    var stipendio = Number(input.value);
    var parInps = document.querySelector('#inps');
    var parIrp = document.querySelector('#irpef');
    var parRed = document.querySelector('#reddito');
    if (stipendio <= 15000) {
        parRed.innerHTML = 'il tuo reddito annuo lordo è: ' + stipendio;
        parIrp.innerHTML = 'il tuo reddito annuo netto è: ' + StipendioUno.getRedditoAnnuoNetto();
        parInps.innerHTML = 'le tasse da pagare ammontano a: ' + StipendioUno.getUtileTasse();
    }
    if (stipendio > 15000 && stipendio <= 28000) {
        parRed.innerHTML = 'il tuo reddito annuo lordo è: ' + stipendio;
        parIrp.innerHTML = 'il tuo reddito annuo netto è: ' + StipendioDue.getRedditoAnnuoNetto();
        parInps.innerHTML = 'le tasse da pagare ammontano a: ' + StipendioDue.getUtileTasse();
    }
    if (stipendio > 29000) {
        parRed.innerHTML = 'il tuo reddito annuo lordo è: ' + stipendio;
        parIrp.innerHTML = 'il tuo reddito annuo netto è: ' + StipendioTre.getRedditoAnnuoNetto();
        parInps.innerHTML = 'le tasse da pagare ammontano a: ' + StipendioTre.getUtileTasse();
    }
});
