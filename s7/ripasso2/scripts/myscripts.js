fetch('https://sofin.wp-admin.it/public/api/v1/user')
  .then(response => response.json())
  .then(data => console.log(data));



fetch(
    'https://sofin.wp-admin.it/public/api/v1/user', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name : 'Nunzio',
        lastname : 'Buio',
        email : 'tesjhfsdukjy@test.com',
        role_id : 1,
        password : 'sfdafsdafsda'
    }),
}
)
.then(response => response.json())
.then(data => {
alert('Utente '+data.id+' Creato')
})