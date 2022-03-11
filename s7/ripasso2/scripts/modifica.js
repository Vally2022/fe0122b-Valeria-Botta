var param = new URLSearchParams(location.search)
var id = param.get('id')


fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {

        var role = data
        var utente = role.find(o => o.id == id)

        document.getElementById('name').value = utente.name;
        document.getElementById('lastname').value = utente.lastname;
        document.getElementById('email').value = utente.email;
        document.getElementById('role').value = utente.role_id;

        var btnModif = document.querySelector('#submit')

        btnModif.addEventListener('click', function (e) {
            e.preventDefault();
            let name = document.getElementById('name').value;
            let lastname = document.getElementById('lastname').value;
            let email = document.getElementById('email').value;
            let ruolo = document.getElementById('role').value;


            fetch('https://sofin.wp-admin.it/public/api/v1/user/' + id, {

                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify ({
                    name: name,
                    lastname: lastname,
                    email: email,
                    role_id: ruolo,

                })

            })
            .then(response=>response.json())
            .then(data=>{
                
                    setInterval(() => {
                        window.location.href = 'tabella.html'
                    }, 2000);
                
            })



        })


    })