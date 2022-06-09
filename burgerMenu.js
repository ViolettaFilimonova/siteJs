const btnBurgerMenu = document.querySelector('.burgerMenu')
const btnMovement = true

movementMenue()
function movementMenue(){
    if (btnMovement){
            document.body.querySelector('.burgerMenu-box').insertAdjacentHTML('beforeend',

                `<div class="burgerMenu-window">
                        <ul>
                            <li>Интернет</li>
                            <li>HotsPot</li>
                            <li>Облочные сервисы</li>
                            <li>IT-аутсорсинг</li>
                        </ul>
                    </div>`
    
            )
            console.log(btnMovement);
    }else{
        document.body.querySelector('.modal-window').remove()
        console.log(btnMovement);
    }
    btnMovement = !btnMovement
}