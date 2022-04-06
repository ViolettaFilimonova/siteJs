

//let response = await fetch('https://raw.githubusercontent.com/ViolettaFilimonova/dataBaseJSON/main/lk_table.json')
    // .then((res) => res.json()
    //     .then((data) => data
    //             //.map(item =>
                // if(item.login == login.value && item.pass == pass.value)
                // console.log(item.pass)
    //         )
    // )
//console.log(response)

// let commits = await response.json();
// alert(commits[0].login);

// function auth({pass}){
//     document.body.insertAdjacentHTML('beforebegin',
//
//         `<div>${pass}</div>`
//         )
// }

// async function f() {
//     return response.pass;
// }

// f().then(alert);
//
document.getElementById('check').onclick = function (){
    // let login = document.getElementById('login')
    // let password = document.getElementById('password')
    // (async () => {
    //     let url = 'https://raw.githubusercontent.com/ViolettaFilimonova/dataBaseJSON/main/lk_table.json';
    //     let response = await fetch(url);
    //
    //     let commits = await response.json(); // читаем ответ в формате JSON
    //     for (const item of commits) {
    //         if(item.login == login.value && item.pass == password.value)
    //             console.log(item)
    //         alert('вошли в систему')
    //     }
    //
    // })()
    let url = 'https://raw.githubusercontent.com/ViolettaFilimonova/dataBaseJSON/main/lk_table.json';
    (async () => {

        let response = await fetch(url);

        let commits = await response.json(); // читаем ответ в формате JSON
        let log = document.getElementById('login')
        let password = document.getElementById('password')
        for (const item of commits) {
            if(item.login == log.value && item.pass == password.value){
                window.location.href= item.id +'.html'
                console.log(item.id)
                console.log(log.value)
            }else if (item.login !== log.value && item.pass == password.value) {
                alert('Ввели неправильный логин')
                console.log(password.value)
            }else if (item.login == log.value && item.pass !== password.value) {
                alert('Ввели неправильный пароль')
                console.log(password.value)
            }
        }
        // console.log(password.value)
    })()

}


// (async () => {
//     let url = 'https://raw.githubusercontent.com/ViolettaFilimonova/dataBaseJSON/main/lk_table.json';
//     let response = await fetch(url);
//
//     let commits = await response.json(); // читаем ответ в формате JSON
//     let log = document.getElementById('login')
//     let password = document.getElementById('password')
//     // for (const item of commits) {
//     //     if(item.login == log.value && item.pass == password.value)
//     //         console.log(item)
//     //     alert('вошли в систему')
//     // }
//     console.log(password.value)
// })()

