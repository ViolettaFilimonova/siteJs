// export function sayHi() {
//     alert(`Hello, Kate!`);
// }

export function auth(){

    let url = 'https://raw.githubusercontent.com/ViolettaFilimonova/DataBaseForPersonalAccount/main/data.json';
    (async () => {

        let response = await fetch(url);


        let commits = await response.json(); // читаем ответ в формате JSON
        let log = document.getElementById('login')
        let password = document.getElementById('password')
        for (const item of commits) {
            if(item.login === log.value && item.pass === password.value){
                // window.location.href= 'person.html'
                document.cookie = `login=${item.login}`
                window.location.href= 'person.html'
                console.log(item)
                // let person = document.getElementById('person')
                // person.insertAdjacentHTML('afterbegin', item.id)
                // console.log(person)

            }else if (item.login !== log.value && item.pass == password.value) {
                alert('Ввели неправильный логин')
                console.log(password.value)
            }else if (item.login == log.value && item.pass !== password.value) {
                alert('Ввели неправильный пароль')
                console.log(password.value)
            }

        }
        console.log('Вы вошли')
    })()
}



