let items = [{
    name:'Mohit',
    age:'34'
},
{
    name:'Damke',
    age:'22'
},
{
    name:'Parth',
    age:'64'
},
{
    name:'Raees',
    age:'30'
},
{
    name:'Rawan',
    age:'93'
},
{
    name:'Raman',
    age:'44'
},]

const item = document.querySelector('#item')
let doc = items.map(function(s){
    return(
        '<div>'+ s.name + ' is ' + s.age + ' year old '+'</div>'
    )
})

item.innerHTML = doc.join('\n')