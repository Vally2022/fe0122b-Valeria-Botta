var operazione = false;


function tasto(valore) {
    
    if (valore == "+" || valore == "*" || valore == "-" || valore == "/") {
        if (operazione == false) {
            document.getElementById("risultato").value += valore;
            operazione = true;
        }
    }

    if (Number.isInteger(valore) || valore == '.') {
        document.getElementById("risultato").value += valore;
    }
}


function uguale() {
    document.getElementById("risultato").value = eval(document.getElementById("risultato").value);
    operazione = false;

}
//funge da reset
function reset() {
    document.getElementById("risultato").value = "";
    operazione = false;
}

//funge da cancella per singolo numero
function cancella() {
    document.getElementById("risultato").value = document.getElementById("risultato").value.substr(0, document.getElementById("risultato").value.length - 1);
    operazione = false;
}