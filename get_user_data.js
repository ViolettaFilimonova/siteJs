

//Настройка куки
let add = document.body.querySelector('.add')

// console.log(add)
let userLogin = getCookie('login')



function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

//соединяемся с бд и передаем дату в функцию  getResult
fetch('https://raw.githubusercontent.com/ViolettaFilimonova/data-json-wds/main/data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        getResult(data)
    });

let items
//Выводим полученный результат о пользователе на страницу
function getResult(data){
    for (let i = 0; i < data.length; i++){
        if (data[i].login === userLogin){
            let log = data[i].login
            let name = data[i].name
            let balance = data[i].balance
            let ip = data[i].ip
            let tariff = data[i].tariff
            let address = data[i].address
            localStorage.setItem('login', JSON.stringify(log))
            localStorage.setItem('name', JSON.stringify(name))
            localStorage.setItem('balance', JSON.stringify(balance))
            localStorage.setItem('ip', JSON.stringify(ip))
            localStorage.setItem('tariff', JSON.stringify(tariff))
            localStorage.setItem('address', JSON.stringify(address))


            if (localStorage.getItem('balance')) {
                items = JSON.parse(localStorage.getItem('balance'))
                console.log(items)
            } else {
                items = []
            }
        }else {
            console.log('err')
        }
    }
}


console.log(items, 'data')
