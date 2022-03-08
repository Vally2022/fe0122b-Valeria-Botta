//funzione textHTML se input è "" 'campo obbligatorio'
//input email = input ripeti email
// password1 = password2
// creare array vuoto "bacinella"
//tutti input devono creare un array
//creare una classe "nessuno"
//e memorizzarsi nel localstorage
//non eliminare i dati all'aggiornamento pagina


let btnInvio = document.querySelector('.bottone');


btnInvio.addEventListener('click', function (e) {

    e.preventDefault();

    var utente = document.querySelectorAll('.pippo');
    var email1 = document.getElementById("email1").value;
    var email2 = document.getElementById("email").value;
    var controllo = true //variabile di controllo
    var pippo1 = document.getElementById('user1').value;
    var pippo3 = document.getElementById('psw').value;



    utente.forEach(elemento => {
        var valore = elemento.value;


        if (valore == "") {
            elemento.style.border = '1px solid red'
            controllo = false

        }

        else {
            elemento.style.border = ""
            document.querySelectorAll('.pippo').value ='';
        }

    });


    if (email1 != email2) {
        document.getElementById("span").innerHTML = "Email sbagliata"
        controllo = false

    }
    else {
        document.getElementById("span").innerHTML = ""

    }
    if (controllo) {
        var nuovoUtente = new User(pippo1, email1, pippo3); //blocco di sicurezza
        memorizzaDati(nuovoUtente)
    }

})


class User {
    constructor(username, email, password) {

        this.username = username
        this.email = email
        this.password = password
    }
}


function memorizzaDati(newUser) {

    let elementiSalvati = localStorage.getItem('utenti')
    let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
    //qui inserisci il controllo per verificare se l'email inserita dall'utente appartiene ad utente già registrato
    //preferibilmente utilizza il metodo find()
    
    var target = dataBase.find( oldUser => oldUser.email == newUser.email)            
    
     if (target == undefined){   
    dataBase.push(newUser);
    localStorage.setItem('utenti', JSON.stringify(dataBase))
     }
     else {
         document.getElementById('check').innerHTML = 'Email esistente'
     }
}

