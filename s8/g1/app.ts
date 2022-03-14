let btnNumero: any = document.querySelector('#generaNumero');
let gioca: any = document.querySelector('#gioca');
let esito: any = document.createElement('p')
let risultato: any = document.querySelector('.esito')
risultato.append(esito);
let input: any = document.querySelector('#player1');
let input2: any = document.querySelector('#player2');
let sfida: any = document.querySelector('#sfida')


btnNumero.addEventListener('click', function () {
    let paragraf: any = document.getElementById('paragrafo');
     

    let num: any = Math.floor(Math.random() * (100 - 1) + 1)
    
    paragraf.innerHTML = 'il numero vincente è: ' + num
    
    
    gioca.addEventListener('click', function () {


        let playerUno = input.value
        let playerDue = input2.value   



        sfida.innerHTML = 'Giocatore 1 ha il numero: ' + playerUno + '<br> ' + 'Giocatore 2 ha il numero: ' + playerDue

        if (playerDue < num && playerUno < num)
            setInterval(function () {

                esito.innerHTML = 'Nessuno ha vinto'
            }, 500)
        else if (playerDue > num && playerUno < num) {
            setInterval(function () {

                esito.innerHTML = 'Vince giocatore due'
            }, 500)
        }
        else if (playerDue < num && playerUno > num) {
            setInterval(function () {

                esito.innerHTML = 'Vince giocatore uno'
            }, 500)
        }

    })
})