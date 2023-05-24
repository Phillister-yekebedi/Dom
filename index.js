document.body.style.backgroundColor= 'silver'

document.getElementById('title').style.color = 'green'

// let allH3Elements= document.querySelector('h3')
// allH3Elements.style.textTransform = 'uppercase';

let allH3Elements= document.querySelectorAll('h3')
for(let y = 0;y < allH3Elements.length;y++){
    allH3Elements[y].style.textTransform= 'uppercase'
}



let oldfrut = document.getElementById('fruList');
let newList = document.createElement('li');
let newFruit = document.createTextNode('grapes')
newList.appendChild(newFruit);
oldfrut.appendChild(newList)


let oldVegies = document.getElementById('vegList');
let newVegies= document.createElement('li');
let newVegesName= document.createTextNode('Kunde')
newVegies.appendChild(newVegesName);
oldVegies.appendChild(newVegies);
