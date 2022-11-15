const btn = document.getElementById('btn')
const container = document.getElementById('container')

btn.addEventListener('click', () => {
    notifymaker()
})

function notifymaker(){
    const noti = document.createElement('div')
    noti.classList.add('notify')
    container.appendChild(noti)
    noti.innerText = "HI MY ALL FOLLOWERS"

    setTimeout(() => {
        noti.remove()
    }, 3000);
}