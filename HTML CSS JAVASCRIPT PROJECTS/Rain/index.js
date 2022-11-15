function heartRain(){
    const heart = document.createElement('div')
    heart.classList.add('heart')
    heart.style.left = Math.random() * 100 + 'vw'
    heart.style.animationDuration = Math.random() * 7 + 3 + 's'
    heart.innerText = 'LOVE YOU ALL VIEWERS🧡'
    

    document.body.appendChild(heart)
    setTimeout(() => {
        heart.remove
    }, 1000);
}

setInterval(heartRain, 200)