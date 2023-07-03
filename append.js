const placesList = document.getElementById('places-list');
const newLi = document.createElement('li');
newLi.innerText = 'Rangpur'
placesList.appendChild(newLi)

const main = document.querySelector('main');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Favourite Food';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Briyani'
ul.appendChild(li1)
const li2 = document.createElement('li');
li2.innerText = 'Borhani'
ul.appendChild(li2)
const li3 = document.createElement('li');
li3.innerText = 'Ice-cream'
ul.appendChild(li3)
section.appendChild(ul)
main.appendChild(section)

const dressSection = document.createElement('section');
dressSection.innerHTML = `
<h1>My Dress Collection</h1>
<ul>
    <li>Pant</li>
    <li>Pajma</li>
    <li>T-shirt</li>
</ul>
`
main.appendChild(dressSection)