//
// localStorage.setItem('login', JSON.stringify(log))
// localStorage.setItem('name', JSON.stringify(name))
let bal = localStorage.getItem('balance')
// localStorage.setItem('ip', JSON.stringify(ip))
// localStorage.setItem('tariff', JSON.stringify(tariff))
// localStorage.setItem('address', JSON.stringify(address))

function header(){
    const nav = document.querySelector('.navigation')
    nav.insertAdjacentHTML('afterbegin',
        `<ul class="links">
                    <li><a href="https://datiks.ru" ><img class="img" src="/img/datics.jpg" alt=""></a></li>
                    <li class="link"><a class="login" href=""></a></li>
                    <li class="link"><a class="balance" href="">Баланс: ${bal}</a></li>
                    <li class="link"><a href="">Пополнить</a></li>
                    <li class="link"><a href="">Поддержка</a></li>
                    <li class="link tel"><a href="tel:8 800 333 06 64">8 (800) 333 06 64</a></li>
                    <li class="link"><div class="personal-area"></div></li>
                    <li class="link exit">Выход</li>
                </ul>`
    )

// выводит лицевой счет в header
    let login = document.querySelector('.login')
    login.insertAdjacentHTML("afterbegin",
        `ЛС: ${document.cookie.split('=')[1]}`

    )
}

header()



// let balanceStore = localStorage.getItem('balance')

// let balance = document.querySelector('.balance')
// balance.insertAdjacentHTML("afterbegin",
//     `Баланс: ${bal}`
//
// )
document.querySelector('.exit').addEventListener('click', () => {
    // localStorage.clear()
    window.location.href = 'auth.html'
})


console.log('2')