
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
    var btn = document.createElement('button')
    
    
    row.innerText = elemento.username
    row1.innerText = elemento.email
    row2.innerText = elemento.password

    
    tabella.append(contenitore);
    contenitore.append(row,row1,row2,btn)

    
    btn.innerHTML = "elimina"
    
    contenitore.append(btn)
    btn.addEventListener('click',function(){
        contenitore.remove()
        eliminaRiga()
    })
    

});

function eliminaRiga(elemento){
        var indice = dataBase.indexOf(elemento)        
        dataBase.splice(indice,1)
        localStorage.setItem('utenti', JSON.stringify(dataBase))
}

