fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (prodotto) {
    prodotto.forEach(function (element) {
        var prodotto1 = new Abiti(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        //Creare manualmente altre 3 istanze della classe creata precedentemente, scrivendo le caratteristiche dei capi a mano.
        var gonna = new Abiti(6, 6488, 'estate', 'gonna', 6754, 3, 'grigio', 45, 54.9, 'a', 10);
        var cappello = new Abiti(7, 6978, 'inverno', 'cappello', 2254, 5, 'nero', 50, 62, 'negozio', 19);
        var maglione = new Abiti(8, 9768, 'inverno', 'maglione', 6884, 7, 'giallo', 20, 24.4, 'negozio', 5);
        console.log(gonna, cappello, maglione);
        //
        //è necessario mostrare in console le caratteristiche dei capi una volta ottenuta la risposta della funzione fetch.
        console.log(prodotto1);
        console.log(prodotto1.getsaldocapo());
        console.log(prodotto1.getacquistocapo());
        //
        //creazione di elementi html per la stampa del catalogo a video
        var tabella = document.getElementById('tab');
        var row = document.createElement('tr');
        var cellaID = document.createElement('td');
        var cellaCod = document.createElement('td');
        var cellaColl = document.createElement('td');
        var cellaCapo = document.createElement('td');
        var cellaMod = document.createElement('td');
        var cellaQty = document.createElement('td');
        var cellaCol = document.createElement('td');
        var cellaIva = document.createElement('td');
        var cellaPrezzo = document.createElement('td');
        var cellaPrezzoTot = document.createElement('td');
        var cellaDispo = document.createElement('td');
        var cellaSaldo = document.createElement('td');
        tabella.append(row);
        cellaID.innerHTML = element.id;
        cellaCod.innerHTML = element.codprod;
        cellaColl.innerHTML = element.collezione;
        cellaCapo.innerHTML = element.capo;
        cellaMod.innerHTML = element.modello;
        cellaQty.innerHTML = element.quantita;
        cellaCol.innerHTML = element.colore;
        cellaDispo.innerHTML = element.disponibile;
        cellaPrezzo.innerHTML = element.prezzoivainclusa;
        cellaIva.innerHTML = element.prezzoivaesclusa;
        row.append(cellaID, cellaCod, cellaColl, cellaCapo, cellaMod, cellaQty, cellaCol, cellaDispo, cellaPrezzo);
        //il bottone mostra i due metodi in 1 secondo dal click
        var btnPrezzo = document.querySelector('#show');
        btnPrezzo.addEventListener('click', function () {
            cellaPrezzoTot.innerHTML = Math.round(prodotto1.getacquistocapo());
            row.append(cellaPrezzoTot);
            setTimeout(function () {
                cellaPrezzoTot.style.textDecoration = 'line-through';
                cellaSaldo.innerHTML = Math.round(prodotto1.getsaldocapo());
                row.append(cellaSaldo);
            }, 1000);
        });
        //questo btn aggiunge il singolo prodotto al carrello
        var btnAggiungi = document.createElement('button');
        btnAggiungi.innerHTML = '+';
        btnAggiungi.setAttribute('data-modello', element.modello);
        btnAggiungi.setAttribute('data-prezzo', element.prezzoivainclusa);
        tabella.append(btnAggiungi);
        //evento dell'aggiunta al carrello
        btnAggiungi.addEventListener('click', function () {
            var cellaID2 = document.createElement('li');
            var cassa = document.querySelector('#cassa');
            var saldo = document.querySelector('#saldo');
            cassa.append(cellaID2);
            cellaID2.innerHTML = 'il prodotto ' + this.getAttribute('data-modello') + ' è stato aggiunto al carrello' + ': ' + this.getAttribute('data-prezzo') + '€';
        });
    });
});
var Abiti = /** @class */ (function () {
    function Abiti(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abiti.prototype.getsaldocapo = function () {
        return (this.getacquistocapo() * this.saldo) / 100;
    };
    Abiti.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa * this.quantita;
    };
    return Abiti;
}());
