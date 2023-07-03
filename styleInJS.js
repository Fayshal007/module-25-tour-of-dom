const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgrey'
}
const fruitsContainer = document.getElementById('fruits-container')
fruitsContainer.style.backgroundColor = 'yellow'
const headerContainer = document.getElementById('header-container');
headerContainer.classList.add('header-bg');
headerContainer.classList.remove('large-text')

// const placesContainer = document.getElementById('places-container');
// console.log(placesContainer.childNodes[3].childNodes[5].previousSibling);

// const placesUl = document.querySelector('#places-container ul');
// console.log(placesUl.parentNode.parentNode);
// const newLi = document.createElement('li');
// newLi.innerText = 'Coxs-Bazar';
// console.log(newLi);
// placesUl.appendChild(newLi);