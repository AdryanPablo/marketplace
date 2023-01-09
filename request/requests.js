const urlJson = './user.json'
const urlPhp = './user.php'

function readJsonFile(url) {

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

function readPhpFile(url) {

    fetch(url)
        .then(response => response.json())
        .then(user => {
            console.log(user.name);
            console.log(user.lastname);
            console.log(user.email);
            console.log(user.password);
        })
}

readJsonFile(urlJson)
readPhpFile(urlPhp)