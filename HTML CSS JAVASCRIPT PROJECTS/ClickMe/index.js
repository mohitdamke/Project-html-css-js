const dora = document.querySelector('.dora0')
const dora1 = document.querySelector('.dora1')

dora.addEventListener('click', () =>{
  if(dora1.classList.contains('dora1')){
    dora1.classList.add('active')
    dora.classList.remove('active')
  }
})
dora1.addEventListener('click', () =>{
  if(dora.classList.contains('dora')){
    dora.classList.add('active')
    dora1.classList.remove('active')
  }
})

