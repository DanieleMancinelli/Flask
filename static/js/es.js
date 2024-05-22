function getElenco() {
    fetch('https://3246-danielemancinell-flask-wo0l08dojlo.ws-eu114.gitpod.io/elenco')
    .then(response => response.json())
    .then(data => {
        document.getElementById('elenco').innerHTML = ''
        console.log(data)
        for (let regione in data) {
            document.getElementById('elenco').innerHTML += '<a href=https://3246-danielemancinell-flask-wo0l08dojlo.ws-eu114.gitpod.io/info/' + data[regione] + '>' + data[regione] + '</a>' + '<br />'
        }
    })
}


