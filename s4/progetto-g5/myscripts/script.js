function tasto(valore) {
var display = document.getElementById('risultato').value;
document.getElementById('risultato').value += valore;
}

function uguale() {
    document.getElementById("risultato").value = eval(document.getElementById("risultato").value);

}

function cancella() {
    document.getElementById('risultato').value = "";
}


