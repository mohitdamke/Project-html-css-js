const open = document.getElementById('open')
const close = document.getElementById('close')
const popupcontainer = document.getElementById('popup-container')

open.addEventListener('click', () => {
    popupcontainer.classList.add('active')
})

close.addEventListener('click', () => {
    popupcontainer.classList.remove('active')
})