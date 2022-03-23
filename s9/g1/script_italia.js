var dropdownR = document.querySelector("#regioni");
fetch("regioni.json")
    .then(function (response) { return response.json(); })
    .then(function (regioni) {
    console.log(regioni);
    dropdownR.addEventListener("change", stampaRegione);
    for (var i = 0; i < regioni.length; i++) {
        var select = document.createElement("option");
        select.setAttribute("data-nome", regioni[i].prov_regione);
        select.value = regioni[i].prov_regione;
        select.innerHTML = regioni[i].prov_regione;
        console.log(regioni[i]);
        dropdownR.append(select);
    }
    function stampaRegione() {
        var valoreRegione = dropdownR.value;
        var regioneSelezionata = regioni.find(function (regioni) { return regioni.prov_regione == valoreRegione; });
        document.querySelector("#nomeRegione").innerHTML = "La regione selezionata è: " + regioneSelezionata.prov_regione;
        document.querySelector("#stemmaR").setAttribute("src", "img/regioni/" + regioneSelezionata.prov_regione + ".png");
    }
});
fetch("province.json")
    .then(function (response) { return response.json(); })
    .then(function (province) {
    var dropdownP = document.querySelector("#province");
    dropdownP.addEventListener("change", stampaProvincia);
    for (var i = 0; i < province.length; i++) {
        var selectP = document.createElement("option");
        selectP.setAttribute("data-prov_reg", province[i].prov_reg);
        selectP.value = province[i].prov_reg;
        selectP.innerHTML = province[i].prov_nome;
        dropdownP.append(selectP);
    }
    function stampaProvincia() {
        var valoreProvincia = dropdownP.value;
        var provinciaSelezionata = province.find(function (province) { return province.prov_reg == valoreProvincia; });
        document.querySelector("#nomeProvicia").innerHTML = "La provincia selezionata è: " + provinciaSelezionata.prov_nome;
        document.querySelector("#stemma").setAttribute("src", "img/province/" + provinciaSelezionata.prov_nome + ".png");
    }
});
