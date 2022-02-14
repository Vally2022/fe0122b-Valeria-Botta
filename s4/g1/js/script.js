function cambiaColore (titolo,red) {
    document.getElementById('titolo').style.color = 'blue';
    document.getElementById('titolo').style.background = 'yellow';
    
}

window.onclick = cambiaColore;

function mostraMessaggio() {
    alert('Ciao');
    document.write('Conferma');
}

window.alert('Ciao, mi chiamo Valeria');


