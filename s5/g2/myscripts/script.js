let budget = 1000;
let spesa = Math.floor(Math.random()*250);


function valore() {while (budget > 0) {
    budget = budget - spesa;
    
    console.log(budget);
    if(budget >= 700) {
        document.getElementById('1commento').innerHTML = "Hai speso: " + budget + "€, puoi proseguire!";
        break;
    }
    if (budget >= 600) {
        document.getElementById('2commento').innerHTML = "Hai speso: " + budget + "€, non esagerare";
        break;
    }

    if (budget >= 500) {
        document.getElementById('3commento').innerHTML = "Hai speso: " + budget + "€, sei quasi al limite!";
        break;
    }

    if (budget <= 400 && budget > 300 ) {
        document.getElementById('4commento').innerHTML = "Hai speso: " + budget + "€, hai superato il limite!";
        break;
    }

    if (budget == 0) {
        document.getElementById('4commento').innerHTML = "Hai speso: " + budget + "€, sei al verde";
        break;
    }
    

} 
}

