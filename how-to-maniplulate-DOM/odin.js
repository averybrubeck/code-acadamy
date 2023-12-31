
// USE THIS since there is only one div this works, will need to get item by class/id or use query selector all for all div tags
//const container = document.querySelector('div');

//get element by id, created variable to mainipulate element
//const title = document.getElementById('main-heading');

//const listItem = document.getElementsByClassName('list-item');

//how to get item and restyle it through JS
const title = document.querySelector('#main-heading');
title.style.color = 'red'; 
console.log(title);

//in order to style list items you need a for loop to iterate through every item of the Array
const listItems = document.querySelectorAll('.list-item');
for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '5rem';
}
console.log(listItems);



//CREATING NEW ELEMENTS IN HTML DOM
const ul = document.querySelector('ul');
const newLi = document.createElement('li');
//grab ul and append it with newLI to make a new li
ul.append(newLi);
//modify/add text to new element set attribute adds ID class lists adds to class
newLi.textContent = 'Movier';
//newLi.setAttribute('id', 'list-item');
//styles not applying due to for loop at top
newLi.classList.add('list-item')

//remove element from DOM
newLi.remove();