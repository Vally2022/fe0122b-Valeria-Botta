//funzione textHTML se input è "" 'campo obbligatorio'
//input email = input ripeti email
// password1 = password2
// creare array vuoto "bacinella"
//tutti input devono creare un array
//creare una classe "nessuno"
//e memorizzarsi nel localstorage
//non eliminare i dati all'aggiornamento pagina

let btnInvio = document.querySelector('.bottone');


btnInvio.addEventListener('click', function(e){
    
    e.preventDefault();
    var utente = document.querySelectorAll('.pippo');
    
    utente.forEach(elemento => {
        var valore = elemento.value;
        if(valore == ""){
            elemento.style.border = '1px solid red'
        }
        else {
            console.log('no ok')
        }
        
    });
})