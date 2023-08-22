//a <p> with red text that says “Hey I’m red!” DONE!
//an <h3> with blue text that says “I’m a blue h3!”
//a <div> with a black border and pink background color with the following elements inside of it:
    //another <h1> that says “I’m in a div”
    //a <p> that says “ME TOO!”
//Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const container = document.getElementById('container');
const newP = document.createElement('p');
const newerP = document.createElement('p')
const newH1 = document.createElement('h1');
const newH3 = document.createElement('h3');
const newDiv = document.createElement('div');





newP.textContent = 'Hey I"m red!'
newP.style.color = 'red';

newH3.textContent = 'I"m a blue H3'
newH3.style.color = 'blue';


newDiv.style.backgroundColor = 'pink', border = '2px solid black';
newDiv.append(newH1);
newH1.textContent = 'Im in a div!';
newDiv.append(newerP);
newerP.textContent = 'Me Too!';

container.append(newH3, newP, newDiv);

console.log(newDiv);