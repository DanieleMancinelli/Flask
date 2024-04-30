function getElenco() {
    fetch('https://3246-daniele0777-flask-w05ladh5qti.ws-eu110.gitpod.io/elenco')
    .then(response => response.json())
    .then(data => {
        document.getElementById('elenco').innerHTML = ''
        console.log(data)
        for (let regione in data) {
            document.getElementById('elenco').innerHTML += '<a href=https://3246-daniele0777-flask-w05ladh5qti.ws-eu110.gitpod.io/info/' + data[regione] + '>' + data[regione] + '</a>' + '<br />'
        }
    })
}


