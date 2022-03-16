abstract class Calculator {
    //codredd: number;
    redditoannuolordo: number
    tasseinps: number
    tasseirpef: number

    constructor(redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        //this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef
    }
    UtileTasse(): void { }
    TasseInps(): void { }
    TasseIrpef(): void { }
    RedditoAnnuoNetto(): void { }


}

class FasciaUno extends Calculator {
    constructor(redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        super(redditoannuolordo, tasseinps, tasseirpef)

    }

    public getUtileTasse(): number {
        var input: any = document.querySelector('#stipendio')
        var stipendio = Number(input.value)
        return this.getTasseInps() + this.getTasseIrpef()

    }

    public getTasseInps(): number {
        var input: any = document.querySelector('#stipendio')
        var stipendio = Number(input.value)
        this.redditoannuolordo = stipendio
        return (this.redditoannuolordo / 100) * this.tasseinps
    }

    public getTasseIrpef(): number {
        var input: any = document.querySelector('#stipendio')
        var stipendio = Number(input.value)
        this.redditoannuolordo = stipendio
        return (this.redditoannuolordo / 100) * this.tasseirpef
    }

    public getRedditoAnnuoNetto(): number {
        var input: any = document.querySelector('#stipendio')
        var stipendio = Number(input.value)
        this.redditoannuolordo = stipendio
        return this.redditoannuolordo -= this.getUtileTasse()
    }


}
var StipendioUno: FasciaUno = new FasciaUno(stipendio, 15, 23)
var StipendioDue: FasciaUno = new FasciaUno(stipendio, 24, 35)
var StipendioTre: FasciaUno = new FasciaUno(stipendio, 24, 48)



var input: any = document.querySelector('#stipendio')
var stipendio = Number(input.value)


var calcola = document.querySelector('#btnCalcola')
calcola.addEventListener('click', function () {
    var input: any = document.querySelector('#stipendio')
    var stipendio = Number(input.value)
    var parInps = document.querySelector('#inps')
    var parIrp = document.querySelector('#irpef')
    var parRed = document.querySelector('#reddito')

    if (stipendio <= 15000) {
        parRed.innerHTML = 'il tuo reddito annuo lordo è: ' + stipendio
        parIrp.innerHTML = 'il tuo reddito annuo netto è: ' + StipendioUno.getRedditoAnnuoNetto()
        parInps.innerHTML = 'le tasse da pagare ammontano a: ' + StipendioUno.getUtileTasse()
    }

    if (stipendio > 15000 && stipendio <= 28000) {
        parRed.innerHTML = 'il tuo reddito annuo lordo è: ' + stipendio
        parIrp.innerHTML = 'il tuo reddito annuo netto è: ' + StipendioDue.getRedditoAnnuoNetto()
        parInps.innerHTML = 'le tasse da pagare ammontano a: ' + StipendioDue.getUtileTasse()
    }


    if (stipendio > 29000) {
        parRed.innerHTML = 'il tuo reddito annuo lordo è: ' + stipendio
        parIrp.innerHTML = 'il tuo reddito annuo netto è: ' + StipendioTre.getRedditoAnnuoNetto()
        parInps.innerHTML = 'le tasse da pagare ammontano a: ' + StipendioTre.getUtileTasse()
    }


})