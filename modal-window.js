
// document.querySelector('.modal-box').insertAdjacentHTML('afterbegin',`<button onclick="openWindow()" class="btn-modal-window"><img src="./img/menu.png" alt="menu"></button>`)

// document.querySelector('.btn-modal-window')
// let btn = true
function openWindow(){
    // if (btn){
    //         document.body.querySelector('.modal-box').insertAdjacentHTML('beforeend',

                // `<div class="modal-window">
                //         <ul>
                //             <li>Интернет</li>
                //             <li>HotsPot</li>
                //             <li>Облочные сервисы</li>
                //             <li>IT-аутсорсинг</li>
                //         </ul>
                //     </div>`
    //
    //         )
    // }else{
    //     document.body.querySelector('.modal-window').remove()
    // }
    // btn = !btn
}

document.querySelector('.modal-box').insertAdjacentHTML('afterbegin',
    `<div class="modal-window">
                        <ul>
                            <li>Интернет</li>
                            <li>HotsPot</li>
                            <li>Облочные сервисы</li>
                            <li>IT-аутсорсинг</li>
                        </ul>
                    </div>`
    )
