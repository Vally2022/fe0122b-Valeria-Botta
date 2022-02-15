function checkUser() {
    var email = document.getElementById('email');
    var password = document.getElementById('psw');

    /*if (email.value == '' || password.value == ''){
        alert('compila i campi');
    }*/
    
    valida(email)
}
    
//oppure usare la funzione paramentrizzata

function valida(input) {
    if(input.value = ''){
    return false}
    else {
        return true
    }
}