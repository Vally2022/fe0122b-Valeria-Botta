let btn = document.querySelector("#btnMenu")
let big = document.querySelector('#ingrandisci')
let color = document.querySelector('#colora')
let set = document.querySelector('#modifica')
let hide = document.querySelector('#nascondi')
let list1 = document.getElementById('lista1')
let list2 = document.getElementById('lista2')
let list3 = document.getElementById('lista3')
let list4 = document.getElementById('lista4')
/*let list = document.getElementById('lista');*/


btn.addEventListener("click",function() {
    let menu = document.querySelector("#dropdown");
    menu.classList.toggle('hidden')
    console.log(btn)
});

big.addEventListener('click', function() {
    let page = document.querySelector("#titolo");
    page.classList.toggle('ingrandisci')
})

color.addEventListener('click', function() {
    let page = document.querySelector("#titolo");
    page.classList.toggle('color')
})

set.addEventListener('click', function() {
    let page = document.querySelector("#titolo");
    page.classList.toggle('modifica')
})

hide.addEventListener('click', function() {
    let page = document.querySelector("#titolo");
    page.classList.toggle('nascondi')
})

list1.addEventListener('click',function(){
    this.classList.toggle('barrato')
})

list2.addEventListener('click',function(){
    this.classList.toggle('barrato')
})

list3.addEventListener('click',function(){
    this.classList.toggle('barrato')
})

list4.addEventListener('click',function(){
    this.classList.toggle('barrato')
})


