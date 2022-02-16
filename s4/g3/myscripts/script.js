function pensione() {
    var anziano = document.getElementById('eta').value;
    if (anziano < 30) {
        document.getElementById('commento').innerHTML = "ti ci vuole troppo tempo";
    }
    else if (anziano = 31 && anziano <= 63) {
        document.getElementById('commento').innerHTML = "sei sulla buona strada";
    }

    else {
        document.getElementById('commento').innerHTML = "Complimenti! Sei vecchio e pensionato!";
    }
}


accendi = () => { return document.getElementById('text').innerHTML = 'Benvenuto'; }


function scriviCiao(nome) {
    var testo = "Ciao " + nome;
    var scrivi = function () { console.log(testo); }
    return scrivi;
}
var scrivi2 = scriviCiao("Valeria");
scrivi2(); 


function calcolo() {
    var min = document.getElementById('anni').value;
    let max =  40;
    if(min < 40) {
        document.getElementById('risultato').innerHTML = "Mi dispiace ti mancano ancora " + (40 - min) + " anni per andare in pensione";
    }else {
        document.getElementById('risultato').innerHTML = "Complimenti sei in pensione!"
    }
}