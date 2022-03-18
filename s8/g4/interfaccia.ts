interface Cellulare {

    unaRicarica(): void
    minutiDurata(): void
    numero404(): void
    NumeroChiamate(): void
    azzeraChiamte(): void
}

class FirstUser implements Cellulare {

    credito: number;
    costi: number;
    durata: number;
    nChiamate: number
    constructor(credito: number, costi: number, durata: number, nChiamate: number) {
        this.credito = credito;
        this.costi = costi
        this.durata = durata
        this.nChiamate = nChiamate
    }
    unaRicarica(): any {
        let input2: any = document.querySelector('#importo');
        let importo = Number(input2.value)

        this.credito += importo
        document.querySelector('#credito').innerHTML = 'il tuo credito residuo è ' + this.credito
    }
    minutiDurata(): any {
        
        let contatoreMinuti = document.querySelector('#contatoreChiamate')
        contatoreMinuti.innerHTML = 'la tua chiamata è durata min ' + (this.durata*click) + ' ' + ' e il costo è ' + (this.costi * (this.durata*click)) + '€'

    }
    numero404(): any {
        document.querySelector('#credito').innerHTML = 'il tuo credito residuo è ' + (this.credito -= (this.costi * this.durata))
    }

    NumeroChiamate(): any {
        function clicks(){
            click = click + 1
            this.nChiamate = click
            contatoreRicevute.innerHTML = 'hai effettuato n°:  ' + click + ' ' + 'chiamate'
        }
        clicks()
    }
    azzeraChiamte(): any {
        function clicks(){
            click = 0
            this.nChiamate = click
            contatoreRicevute.innerHTML = 'hai effettuato n°:  ' + click + ' ' + 'chiamate'
        }
        clicks()
        let contatoreMinuti = document.querySelector('#contatoreChiamate')
        contatoreMinuti.innerHTML = ' '
    }
}

var User1: FirstUser = new FirstUser(0, 0.2, 30, click)
var numeroChiamate: FirstUser = new FirstUser(0, 0, 0, 0)


var creditoResiduo = document.querySelector('#credito')
var btnChiama = document.querySelector('#chiama')
var btnAzzera = document.querySelector('#azzera')
var btnRispondi = document.querySelector('#rispondi')
var btnCharge = document.querySelector('#charge')
var contatoreMinuti = document.querySelector('#contatoreChiamate')
var contatoreRicevute = document.querySelector('#contatoreRicevute')
var click:any = 0


btnChiama.addEventListener('click', function () {
    let input: any = document.querySelector('#display');
    let display = Number(input.value)
    User1.minutiDurata()
    

    if (display == 404) {
        return User1.numero404()
    }
    
    numeroChiamate.NumeroChiamate()
    

})

btnAzzera.addEventListener('click', function(){
    numeroChiamate.azzeraChiamte()
})



btnCharge.addEventListener('click', function () {
    let input2: any = document.querySelector('#importo');
    let importo = Number(input2.value)
    User1.unaRicarica()
    input2.value = ''
})

