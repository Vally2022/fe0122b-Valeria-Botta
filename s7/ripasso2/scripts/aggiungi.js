
var btnModif = document.querySelector('#submit')

btnModif.addEventListener('click', function (e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let psw = document.getElementById('psw').value;
    let ruolo = document.getElementById('role').value;


    fetch('https://sofin.wp-admin.it/public/api/v1/user', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            name: name,
            lastname: lastname,
            email: email,
            password: psw,
            role_id: ruolo,

        })

    })
        .then(response => response.json())
        .then(data => {

            setInterval(() => {
                window.location.href = 'tabella.html'
            }, 2000);

        })



})


