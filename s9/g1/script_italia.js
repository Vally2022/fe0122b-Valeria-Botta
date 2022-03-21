fetch('regioni.json')
    .then(function (response) { return response.json(); })
    .then(function (regioni) {
    console.log(regioni);
    var dropdownR = document.querySelector('#regioni');
    var menu = [];
    for (var i = 0; i < regioni.length; i++) {
        var select = document.createElement('option');
        select.setAttribute('data-nome', regioni[i].prov_regione);
        select.value = regioni[i];
        select.innerHTML = regioni[i].prov_regione;
        console.log(regioni[i]);
        dropdownR.append(select);
    }
});
fetch('province.json')
    .then(function (responseP) { return responseP.json(); })
    .then(function (province) {
    console.log(province);
    var dropdownP = document.querySelector('#province');
    for (var i = 0; i < province.length; i++) {
        var selectP = document.createElement('option');
        selectP.setAttribute('data-prov_reg', province[i].prov_reg);
        selectP.value = province[i].id;
        selectP.innerHTML = province[i].prov_nome;
        console.log(province[i]);
        dropdownP.append(selectP);
    }
});
var Provincep = /** @class */ (function () {
    function Provincep(prov_it, prov_nome, prov_reg, prov_url) {
        this.prov_it = prov_it;
        this.prov_nome = prov_nome;
        this.prov_reg = prov_reg;
        this.prov_url = prov_url;
    }
    Provincep.prototype.stampaProvincia = function () {
        var par = document.createElement('p');
        var body = document.querySelector('#body');
        body.append(par);
        par.innerHTML = 'la provincia di ';
    };
    return Provincep;
}());
console.log(Provincep);
