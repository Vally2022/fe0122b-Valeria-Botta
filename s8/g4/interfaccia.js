var FirstUser = /** @class */ (function () {
    function FirstUser(credito, costi, durata, nChiamate) {
        this.credito = credito;
        this.costi = costi;
        this.durata = durata;
        this.nChiamate = nChiamate;
    }
    FirstUser.prototype.unaRicarica = function () {
        var input2 = document.querySelector('#importo');
        var importo = Number(input2.value);
        this.credito += importo;
        document.querySelector('#credito').innerHTML = 'il tuo credito residuo è ' + this.credito;
    };
    FirstUser.prototype.minutiDurata = function () {
        var contatoreMinuti = document.querySelector('#contatoreChiamate');
        contatoreMinuti.innerHTML = 'la tua chiamata è durata min ' + (this.durata * click) + ' ' + ' e il costo è ' + (this.costi * (this.durata * click)) + '€';
    };
    FirstUser.prototype.numero404 = function () {
        document.querySelector('#credito').innerHTML = 'il tuo credito residuo è ' + (this.credito -= (this.costi * this.durata));
    };
    FirstUser.prototype.NumeroChiamate = function () {
        function clicks() {
            click = click + 1;
            this.nChiamate = click;
            contatoreRicevute.innerHTML = 'hai effettuato n°:  ' + click + ' ' + 'chiamate';
        }
        clicks();
    };
    FirstUser.prototype.azzeraChiamte = function () {
        function clicks() {
            click = 0;
            this.nChiamate = click;
            contatoreRicevute.innerHTML = 'hai effettuato n°:  ' + click + ' ' + 'chiamate';
        }
        clicks();
        var contatoreMinuti = document.querySelector('#contatoreChiamate');
        contatoreMinuti.innerHTML = ' ';
    };
    return FirstUser;
}());
var User1 = new FirstUser(0, 0.2, 30, click);
var numeroChiamate = new FirstUser(0, 0, 0, 0);
var creditoResiduo = document.querySelector('#credito');
var btnChiama = document.querySelector('#chiama');
var btnAzzera = document.querySelector('#azzera');
var btnRispondi = document.querySelector('#rispondi');
var btnCharge = document.querySelector('#charge');
var contatoreMinuti = document.querySelector('#contatoreChiamate');
var contatoreRicevute = document.querySelector('#contatoreRicevute');
var click = 0;
btnChiama.addEventListener('click', function () {
    var input = document.querySelector('#display');
    var display = Number(input.value);
    User1.minutiDurata();
    if (display == 404) {
        return User1.numero404();
    }
    numeroChiamate.NumeroChiamate();
});
btnAzzera.addEventListener('click', function () {
    numeroChiamate.azzeraChiamte();
});
btnCharge.addEventListener('click', function () {
    var input2 = document.querySelector('#importo');
    var importo = Number(input2.value);
    User1.unaRicarica();
    input2.value = '';
});
