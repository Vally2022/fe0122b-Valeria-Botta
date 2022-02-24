let bottone = document.querySelector('#add_btn');



bottone.addEventListener('click', function () {
    let testo = document.querySelector('#task_txt').value;
    let lista = document.querySelector('#tasks_list_html');
    let li = document.createElement('li');
    li.innerText = testo;
    li.classList.add('spesa')


    li.addEventListener('click', function () {
        li.remove();
    })

    lista.prepend(li)
    document.querySelector('#task_txt').value = '';

    let list2 = localStorage.getItem('lista');
    let db = list2 == null ? [] : JSON.parse(list2);
    db.push(testo);
    localStorage.setItem('lista', JSON.stringify(db))
    

})

let listaSalvata = JSON.parse(localStorage.getItem('lista'))
listaSalvata.forEach(function (elemento) {
    let lista = document.querySelector('#tasks_list_html');
    let li = document.createElement('li');
    li.innerText = elemento;
    li.classList.add('spesa');
    
    

    li.addEventListener('click', function () {
        li.remove();
    })

    

    lista.prepend(li)

    

})

function eliminaElemento (ind) {
    let lista = document.querySelector('#tasks_list_html');
    let li = document.createElement('li');
    li.splice(ind,1);

}