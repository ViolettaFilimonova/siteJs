// let login = document.body.querySelector('.login')
// let name = document.body.querySelector('.neme')
let add = document.body.querySelector('.add')
// console.log(add)
let userLogin = getCookie('login')
console.log(userLogin)

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

fetch('https://raw.githubusercontent.com/ViolettaFilimonova/DataBaseForPersonalAccount/main/data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        getResult(data)
    });

function getResult(data){
    for (i = 0; i < data.length; i++){

        if (data[i].login === userLogin){
            console.log(data[i])
            add.innerHTML = `
            <p>${data[i].login}</p>
            <p>${data[i].name}</p>
            <p>${data[i].age}</p>
            `
            console.log('done')
            break
        }else {

            console.log('err')
        }
    }
}
