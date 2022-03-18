fetch('Abbigliamento.json')
    .then(response => response.json())
    .then(prodotto => {


        prodotto.forEach(element => {
            let prodotto1 = new Abiti(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo)
            
            //Creare manualmente altre 3 istanze della classe creata precedentemente, scrivendo le caratteristiche dei capi a mano.
            let gonna = new Abiti(6, 6488, 'estate', 'gonna', 6754, 3, 'grigio', 45, 54.9, 'a', 10)
            let cappello = new Abiti(7, 6978, 'inverno', 'cappello', 2254, 5, 'nero', 50, 62, 'negozio', 19)
            let maglione = new Abiti(8, 9768, 'inverno', 'maglione', 6884, 7, 'giallo', 20, 24.4, 'negozio', 5)
            console.log(gonna,cappello,maglione);
            //
            //è necessario mostrare in console le caratteristiche dei capi una volta ottenuta la risposta della funzione fetch.
            console.log(prodotto1);
            console.log(prodotto1.getsaldocapo());
            console.log(prodotto1.getacquistocapo());
            //
            //creazione di elementi html per la stampa del catalogo a video
            let tabella = document.getElementById('tab')
            let row = document.createElement('tr')
            let cellaID = document.createElement('td')
            let cellaCod = document.createElement('td')
            let cellaColl = document.createElement('td')
            let cellaCapo = document.createElement('td')
            let cellaMod = document.createElement('td')
            let cellaQty = document.createElement('td')
            let cellaCol = document.createElement('td')
            let cellaIva = document.createElement('td')
            let cellaPrezzo = document.createElement('td')
            let cellaPrezzoTot: any = document.createElement('td')
            let cellaDispo = document.createElement('td')
            let cellaSaldo: any = document.createElement('td')

            tabella.append(row)
            cellaID.innerHTML = element.id
            cellaCod.innerHTML = element.codprod
            cellaColl.innerHTML = element.collezione
            cellaCapo.innerHTML = element.capo
            cellaMod.innerHTML = element.modello
            cellaQty.innerHTML = element.quantita
            cellaCol.innerHTML = element.colore
            cellaDispo.innerHTML = element.disponibile
            cellaPrezzo.innerHTML = element.prezzoivainclusa

            cellaIva.innerHTML = element.prezzoivaesclusa

            row.append(cellaID, cellaCod, cellaColl, cellaCapo, cellaMod, cellaQty, cellaCol, cellaDispo, cellaPrezzo)

            //il bottone mostra i due metodi in 1 secondo dal click
            let btnPrezzo = document.querySelector('#show')
            btnPrezzo.addEventListener('click', function () {
                cellaPrezzoTot.innerHTML = Math.round(prodotto1.getacquistocapo())
                row.append(cellaPrezzoTot)
                setTimeout(function () {
                    cellaPrezzoTot.style.textDecoration = 'line-through'
                    cellaSaldo.innerHTML = Math.round(prodotto1.getsaldocapo())
                    row.append(cellaSaldo)
                }, 1000)
            })
            
            //questo btn aggiunge il singolo prodotto al carrello
            let btnAggiungi = document.createElement('button')
            btnAggiungi.innerHTML = '+'
            btnAggiungi.setAttribute('data-modello', element.modello)
            btnAggiungi.setAttribute('data-prezzo', element.prezzoivainclusa)
            tabella.append(btnAggiungi)
            //evento dell'aggiunta al carrello
            btnAggiungi.addEventListener('click', function () {
                let cellaID2 = document.createElement('li')
                let cassa = document.querySelector('#cassa')
                let saldo = document.querySelector('#saldo')
                cassa.append(cellaID2)
                cellaID2.innerHTML = 'il prodotto ' + this.getAttribute('data-modello') + ' è stato aggiunto al carrello' + ': ' + this.getAttribute('data-prezzo') + '€'


            })
            
        })
    })

class Abiti {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
    includes: any
    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {

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

    getsaldocapo(): number {
        return (this.getacquistocapo() * this.saldo) / 100;
    }

    getacquistocapo(): any {
        return this.prezzoivainclusa * this.quantita
    }



}


