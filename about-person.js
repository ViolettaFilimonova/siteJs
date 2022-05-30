document.querySelector('.about-person').insertAdjacentHTML('afterbegin',
        `
    
                <p>${JSON.parse(localStorage.getItem('name'))}</p>
                <p>ЛС: ${JSON.parse(localStorage.getItem('login'))}</p>
                <p>IP: ${JSON.parse(localStorage.getItem('ip'))}</p>
                <p>Тариф: ${JSON.parse(localStorage.getItem('tariff'))}</p>
                <p>Баланс: ${JSON.parse(localStorage.getItem('balance'))}</p>
                <p>Адрес: ${JSON.parse(localStorage.getItem('address'))}</p>
              `
    )
console.log('person')