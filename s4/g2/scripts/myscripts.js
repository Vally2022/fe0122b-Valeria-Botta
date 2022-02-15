function gioco() {
    var nome = document.getElementById('nome1').value;
    alert("Ciao" + " " + (nome) + " " + "piacere di conoscerti!")


}

function gioco1() {
    let eta = document.getElementById('eta').value;
    alert("wow" + " " + (eta) + " " + "sono tanti!")
}

function esempio2() {
    var test1 = 5;
    document.getElementById('numero').innerHTML = "il numero da mostrare è" + " " + (Number(test1));


    var test2 = 'Simona';
    document.getElementById('testo').innerHTML = "il testo da mostrare è" + " " + (test2);
    

    /*const test1 = 5;
    document.getElementById('const').innerHTML = "il numero da mostrare è" + " " + (Number(test1));*/

}

if(Number(a>b)) {
    document.getElementById('x').innerHTML = false;
} else {
    document.getElementById('x').innerHTML = true;
}




function n(dato){ 
    document.getElementById("risultato").value+=dato;
 }
 
 function operazione() { 
 document.getElementById("risultato").value=eval(document.getElementById("risultato").value); 
 }
 
 function cancella() { 
  document.getElementById("risultato").value=""; 
 }

