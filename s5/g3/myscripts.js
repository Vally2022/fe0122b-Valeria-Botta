let btn = document.querySelector("#btnMenu")
let big = document.querySelector('#ingrandisci')
let color = document.querySelector('#colora')
let set = document.querySelector('#modifica')
let hide = document.querySelector('#nascondi')
let list = document.querySelectorAll('li')




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

for (var i = 0; i < list.length; i +=1) {
    list[i].addEventListener('click', function(i){
        i.classList.toggle('barrato')
    })
}
