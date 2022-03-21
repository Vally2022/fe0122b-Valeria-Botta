fetch('regioni.json')
    .then(response => response.json())
    .then(regioni => {

        console.log(regioni)

        var dropdownR = document.querySelector('#regioni')


        var menu = [];
        for (var i = 0; i < regioni.length; i++) {

            var select = document.createElement('option')

            select.setAttribute('data-nome', regioni[i].prov_regione)
            select.value = regioni[i]
            select.innerHTML = regioni[i].prov_regione
            console.log(regioni[i])
            dropdownR.append(select)

        }




    })



fetch('province.json')
    .then(responseP => responseP.json())
    .then(province => {

        console.log(province)

        var dropdownP = document.querySelector('#province')

        
        for (var i = 0; i < province.length; i++) {

            var selectP = document.createElement('option')
            selectP.setAttribute('data-prov_reg', province[i].prov_reg)
            selectP.value = province[i].id
            selectP.innerHTML = province[i].prov_nome
            console.log(province[i])
            dropdownP.append(selectP)
            

        }
        
    })

class Provincep {
    
    prov_it: string;
    prov_nome: string;
    prov_reg: string;
    prov_url: string;
    constructor(prov_it: string, prov_nome: string, prov_reg: string, prov_url: string) {
        this.prov_it = prov_it
        this.prov_nome = prov_nome
        this.prov_reg = prov_reg
        this.prov_url = prov_url
    }

    stampaProvincia() {
        var par = document.createElement('p')
        var body = document.querySelector('#body')
        body.append(par)
        par.innerHTML = 'la provincia di '
    }
}
console.log(Provincep)