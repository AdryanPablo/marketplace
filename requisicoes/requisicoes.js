const urlJson = './usuario.json'
const urlPhp = './usuario.php'

function lerArquivoJSON(url) {

    let request = new XMLHttpRequest()

    request.responseType = 'json'
    request.onreadystatechange = function () {

        if (request.readyState == 4 && request.status == 200) {

            let response = request.response
            console.log(response);

        }
    }

    request.open('GET', url)
    request.send()
}

function lerArquivoPHP(url) {

    fetch(url)
        .then(response => response.json())
        .then(usuario => {
            console.log(usuario.nome);
            console.log(usuario.sobrenome);
            console.log(usuario.email);
            console.log(usuario.senha);
        })
}

lerArquivoJSON(urlJson)
lerArquivoPHP(urlPhp)