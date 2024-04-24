function getElenco() {
    fetch('https://3246-daniele0777-flask-pmsyci4f5o5.ws-eu110.gitpod.io/elenco')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let regione in data) {
            document.getElementById('elenco').innerHTML += data[regione] + '<br />'
        }
    })
}