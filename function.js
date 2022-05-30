//Подключение к БД и сравнение паролей и логинов
document.querySelector('#check').onclick =  function auth(){

    let url = 'https://raw.githubusercontent.com/ViolettaFilimonova/data-json-wds/main/data.json';
    (async () => {

        let response = await fetch(url);

        let commits = await response.json(); // читаем ответ в формате JSON
        let log = document.getElementById('login')
        let password = document.getElementById('password')
        for (const item of commits) {
            if(item.login === log.value && item.pass === password.value){
                document.cookie = `login=${item.login}`
                window.location.href= 'aboutPerson.html'
            }else if (item.login !== log.value && item.pass == password.value) {
                alert('Ввели неправильный логин')
                console.log(password.value)
            }else if (item.login == log.value && item.pass !== password.value) {
                alert('Ввели неправильный пароль')
                console.log(password.value)
            }

        }
        // console.log('Вы вошли')
    })()
}

//Отменяем базовые настройки формы(перезашрузку страницы)
document.getElementsByTagName('form')[0].onclick =  function (event){
    event.preventDefault()
}



