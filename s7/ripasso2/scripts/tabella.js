fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {
        var oggetto = ['name', 'lastname', 'email', 'role']

        data.forEach(element => {
            let tabella = document.getElementById('tab')
            let row = document.createElement('tr')
            let cancCella = document.createElement('td')
            let modCella = document.createElement('td')
            tabella.append(row)




            for (prop in element) {
                if (oggetto.includes(prop)) {
                    var role = typeof element[prop] == 'object' ? element[prop].nicename : element[prop]

                    var cella = document.createElement('td')

                    cella.innerHTML = role
                    row.append(cella, modCella, cancCella)
                }
            }

            let btnModif = document.createElement('button')
            btnModif.innerHTML = 'Modifica'
            modCella.append(btnModif)
            let btnCanc = document.createElement('button')
            btnCanc.setAttribute('data-email', element.email)
            btnCanc.innerHTML = 'Elimina'
            cancCella.append(btnCanc)

            btnCanc.addEventListener('click', function () {
                var deleteEmail = this.getAttribute('data-email')
                row.remove()
                elimina(deleteEmail)
            })


        });
        function elimina(email) {
            var indice = data.findIndex(u => u.email == email)
            data.splice(indice, 1);




        }



    })