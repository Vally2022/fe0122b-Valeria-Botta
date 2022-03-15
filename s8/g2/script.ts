class SonAccount {
    balanceInit: number;
    //deposito:number;
    constructor(balanceInit: number) {
        this.balanceInit = balanceInit;

    }
    oneDeposit(): any {
        let input1: any = document.querySelector('#conto1');
        let import1 = Number(input1.value)
        this.balanceInit += import1
        document.querySelector('#importo1').innerHTML = 'il saldo è: ' + this.balanceInit

    }

    oneWithDraw(): any {
        let input1: any = document.querySelector('#conto1');
        let import1 = Number(input1.value)
        this.balanceInit -= import1
        document.querySelector('#importo1').innerHTML = 'il saldo è: ' + this.balanceInit
    }

}

let bancaUno: SonAccount = new SonAccount(0)

document.querySelector('#importo1').innerHTML = ' il saldo è: ' + bancaUno.balanceInit;


class MotherAccount extends SonAccount {
    interessi: number
    constructor(balanceInit: number, interessi: number) {
        super(balanceInit);
        this.interessi = interessi;
    }

    twoDeposit():any {
        let input2: any = document.querySelector('#conto2');
        let import2 = Number(input2.value)
        this.balanceInit += import2
        let interessi = Number(Math.floor(input2.value)*1.1)
        document.querySelector('#importo2').innerHTML = 'il saldo è: ' + this.balanceInit
        document.querySelector('#interessi').innerHTML = ' il saldo con interessi è: ' + interessi
    }

    twoWithDraw():any {
        let input2: any = document.querySelector('#conto2');
        let import2 = Number(input2.value)
        this.balanceInit -= import2
        document.querySelector('#importo2').innerHTML = 'il saldo è: ' + this.balanceInit
    }

    addInterest():any {
        let input2: any = document.querySelector('#conto2');
        let import2 = Number(input2.value)
        this.balanceInit += import2
        let interessi = Number(Math.floor(this.balanceInit)*1.1)
        
        document.querySelector('#interessi').innerHTML = ' il saldo con interessi è: ' + interessi
    }
}
let bancaDue: MotherAccount = new MotherAccount(0,0)

document.querySelector('#importo2').innerHTML = ' il saldo è: ' + bancaDue.balanceInit;

let versamento = document.querySelector('#versamento')
versamento.addEventListener('click', function () {
    bancaUno.oneDeposit()
    let input1: any = document.querySelector('#conto1')
    input1.value = ''
    bancaDue.twoDeposit()
    bancaDue.addInterest()
    let input2: any = document.querySelector('#conto2');
    input2.value = ''
})

let prelievo = document.querySelector('#prelievo');
prelievo.addEventListener('click', function(){
    bancaUno.oneWithDraw()
    let input1: any = document.querySelector('#conto1')
    input1.value = ''
    bancaDue.twoWithDraw()
    let input2: any = document.querySelector('#conto2');
    input2.value = ''
})

//let prelievo = document.querySelector('#prelievo')
//let input = document.querySelector('#conto1');