var btnNumero = document.querySelector('#generaNumero');
var gioca = document.querySelector('#gioca');
var esito = document.createElement('p');
var risultato = document.querySelector('.esito');
risultato.append(esito);
var input = document.querySelector('#player1');
var input2 = document.querySelector('#player2');
var sfida = document.querySelector('#sfida');
btnNumero.addEventListener('click', function () {
    var paragraf = document.getElementById('paragrafo');
    var num = Math.floor(Math.random() * (100 - 1) + 1);
    paragraf.innerHTML = 'il numero vincente è: ' + num;
    gioca.addEventListener('click', function () {
        var playerUno = input.value;
        var playerDue = input2.value;
        sfida.innerHTML = 'Giocatore 1 ha il numero: ' + playerUno + '<br> ' + 'Giocatore 2 ha il numero: ' + playerDue;
        if (playerDue < num && playerUno < num)
            setInterval(function () {
                esito.innerHTML = 'Nessuno ha vinto';
            }, 500);
        else if (playerDue > num && playerUno < num) {
            setInterval(function () {
                esito.innerHTML = 'Vince giocatore due';
            }, 500);
        }
        else if (playerDue < num && playerUno > num) {
            setInterval(function () {
                esito.innerHTML = 'Vince giocatore uno';
            }, 500);
        }
    });
});
