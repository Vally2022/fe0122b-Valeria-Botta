//1.selezionare il valore nell'input
//2.creare l'elemento lista nell'html
//3.assegnare 
//2.mostrare il valore di input in output
//3.far si che ogni elemento inserito se poi cliccato scompaia
//4.far si che al reload gli elementi non scopaiano
//5.far si che in fase di eliminazione, l'elemento eliminato venga eliminato anche dall'array e non compaia al reload della pagina


let bottone = document.querySelector('#aggiungi');



bottone.addEventListener('click', function () {
    let testo = document.querySelector('#prova').value;
    let lista = document.querySelector('#todo');
    let li = document.createElement('li');
    li.innerText = testo;
    li.classList.add('spesa')


    li.addEventListener('click', function () {
        li.remove();
    })

    lista.prepend(li)
    document.querySelector('#prova').value = '';

    let list2 = localStorage.getItem('lista');
    let db = list2 == null ? [] : JSON.parse(list2);
    db.push(testo);
    localStorage.setItem('lista', JSON.stringify(db))
    

})

let listaSalvata = JSON.parse(localStorage.getItem('lista'))
listaSalvata.forEach(function (elemento) {
    let lista = document.querySelector('#todo');
    let li = document.createElement('li');
    li.innerText = elemento;
    li.classList.add('spesa');
    
    

    li.addEventListener('click', function () {
        li.remove();
    })

    

    lista.prepend(li)

    

})

function deleteItem(index) {
    let listaSalvata = JSON.parse(localStorage.getItem('lista'))
    todos.listaSalvata(index, 1) 
    localStorage.setItem(JSON.stringify(todos)) 
} 