//подключение к БД
export function connectBD(){
    fetch('https://raw.githubusercontent.com/ViolettaFilimonova/DataBaseForPersonalAccount/main/data.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
        })

}

connectBD()
// fetch('https://raw.githubusercontent.com/ViolettaFilimonova/DataBaseForPersonalAccount/main/data.json')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         getResult(data)
//     });