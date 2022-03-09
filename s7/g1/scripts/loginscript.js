//oggetto email password

btnAccedi = document.getElementById('accedi')

btnAccedi.addEventListener('click', function(u){

    u.preventDefault();
    var emailLog = document.getElementById('emailLog').value;
    var pswLog = document.getElementById('pswLog').value;
    let newUser = localStorage.getItem('utenti')
    let dataBase = newUser == null ? [] : JSON.parse(newUser);
    
    var utenteLoggato = dataBase.find(oldUser => oldUser.email == emailLog && oldUser.password == pswLog)


    
    if (utenteLoggato == undefined) {
        
        alert("riscrivi i dati")       

    }
    else {
        alert("benvenuto")
        if (utenteLoggato) {
            setTimeout(function () {
                window.location = 'tabella.html'
            }, 2000)
        }

        
    }

});




    /*var checkLog = true
    

    if (emailLog == ''){
        document.getElementById('checkEmail').innerHTML = 'inserisci email';
        checkLog = false;
    }
    else {
        document.getElementById('checkEmail').innerHTML = '';
    };
    if (pswLog == ''){
        document.getElementById('checkPsw').innerHTML = 'inserisci password';
        checkLog = false;
    }
    else {
        document.getElementById('checkPsw').innerHTML = '';
    };

    if (checkLog) {        
        var utenteLog = new User(name, emailLog, pswLog);
        recuperaDati(utenteLog)

    }


class User {
    constructor(username, email, password) {

        this.username = username
        this.email = email
        this.password = password
    }
}


function recuperaDati(newUser) {

    let elementiSalvati = localStorage.getItem('utenti')
    let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
    //qui inserisci il controllo per verificare se l'email inserita dall'utente appartiene ad utente già registrato
    //preferibilmente utilizza il metodo find()

    var target = dataBase.find(oldUser => oldUser.email == newUser.emailLog || oldUser.password == newUser.pswLog)
    
    if (target != undefined) {
        
        alert("benvenuto")

    }
    else {
        alert("riscrivi i dati")
    }
}*/