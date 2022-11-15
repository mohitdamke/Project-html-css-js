const text = 'I Am the devil of my world 😈😈  '

let index = 0

function autoText(){
    document.body.innerText = text.slice(0, index)
    index++
    if(index > text.length){
        index = 0
    }
}

setInterval(autoText, 100)