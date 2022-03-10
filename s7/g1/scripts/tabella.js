
var elementiSalvati = localStorage.getItem('utenti')
var dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);


//qui inserisci il controllo per verificare se l'email inserita dall'utente appartiene ad utente già registrato
//preferibilmente utilizza il metodo find()    

dataBase.forEach(function (elemento) {
    let tabella = document.getElementById('tab')

    let contenitore = document.createElement('tr')

    let row = document.createElement('td')
    let row1 = document.createElement('td')
    let row2 = document.createElement('td')
    let row3 = document.createElement('td')
    var btn = document.createElement('button')
    
    
    row.innerText = elemento.username
    row1.innerText = elemento.email
    row2.innerText = elemento.password

    
    tabella.append(contenitore);
    row3.append(btn)
    contenitore.append(row,row1,row2,row3)

    
    btn.innerHTML = 'Elimina'
    btn.classList.add('btn','btn-outline-primary','btn-primary', 'text-white', 'btn-sm')
    btn.setAttribute('data-email',elemento.email)
    contenitore.append(btn)
    btn.addEventListener('click',function(){
        var deleteMail = this.getAttribute('data-email')
        contenitore.remove()
        eliminaRiga(deleteMail)
    })
    

});

function eliminaRiga(email){
        var indice = dataBase.findIndex(u => u.email == email)  
        console.log(indice)      
        dataBase.splice(indice,1)        
        localStorage.setItem('utenti', JSON.stringify(dataBase))
}


