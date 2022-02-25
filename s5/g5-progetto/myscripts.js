//1.selezionare il valore nell'input
//2.creare l'elemento lista nell'html
//3.inserire il valore nell'elemento creato
//4.mostrare il valore di input in output
//5.assegnare una classe
//6 evitare l'invio di campo vuoto e la memorizzazione nel localStorage
//5.far si che ogni elemento inserito se poi cliccato scompaia

//4.far si che al reload gli elementi non scopaiano
//5.far si che in fase di eliminazione, l'elemento eliminato venga eliminato anche dall'array e non compaia al reload della pagina

document.querySelector('#add').addEventListener('click', function(){
    let valore = document.querySelector('#testo').value;
    if(!valore)
    return
    let li = document.createElement('li');
    li.classList.add('spesa')
    li.innerText = valore;
    document.querySelector('#lista').append(li)

    document.querySelector('#testo').value = '';

    li.addEventListener('click', function(){
        li.remove();
        elimina(valore);
    })

    salva(valore)
})

function creaElemento(valore){
    let li = document.createElement('li');
    li.classList.add('spesa')
    li.innerText = valore;
    document.querySelector('#lista').append(li)

    document.querySelector('#testo').value = '';

    li.addEventListener('click', function(){
        li.remove();
        elimina(valore);
    })

}



function salva(testo) {
    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
    db.push(testo)
    localStorage.setItem('lista', JSON.stringify(db))
}

function creaHTML(){
    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);

    db.forEach(function(elemento) {
        let li = document.createElement('li');
        li.classList.add('spesa')
    li.innerText = elemento;
    document.querySelector('#lista').append(li)
    li.addEventListener('click', function(){
        li.remove();
        elimina(elemento)
    })
    });
}

creaHTML()

function elimina(elemento){
    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
    let indice = db.indexOf(elemento)
    db.splice(indice,1)
    localStorage.setItem('lista', JSON.stringify(db))
}