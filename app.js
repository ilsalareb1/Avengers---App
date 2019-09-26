

//list of avengers

const avengers = [];
/* 
// get user input 


//create individual avengers ** Objects function constructor
function Avenger(alias, identity, powers, firstAppearance){
    this.alias = alias;
    this.identitiy = identity;
    this.powers = powers;
    this.firstAppearance = firstAppearance;
    this.yearsActive = function(){
        return new Date().getUTCFullYear() - this.firstAppearance;
    }
}

/* const ironMan = new Avenger('Iron-Man','Tony Stark', 'Smart, Facial Hair, Dead', 1963 );
console.log(ironMan);
 */


//push into array

/* function addAvenger(alias, identity, powers, firstAppearance){
    /* let a = new Avenger(alias, identity, powers, firstAppearance);
    avengers.push(new Avenger(alias, identity, powers, firstAppearance));
}

addAvenger('Captain America', 'Steve Rogers', 'Freedom', 1941);

console.log(avengers); */



//display objects on screen */

const form = document.querySelector('#hero-form');//could also getElementByID
const userAlias = document.querySelector('#alias');
const userPowers = document.querySelector('#powers');
const userFullname = document.querySelector('#full-name');
const userFirstAppearance = document.querySelector('#first-appearance');
const userImage = document.querySelector('#image');
const display = document.querySelector('.display');

function eventListeners(){
    form.addEventListener('submit', displayAvengerMember); 
    display.addEventListener('click', removeAvenger);   
}
eventListeners();

function displayAvengerMember (e){
    let html= '<div class="display-avenger"><div class="display-alias">%alias%</div><div class="display-powers">%powers%</div><div class="display-name">%name%</div><div class="first-appearance">%firstAppearance%</div><div class="display-image"><img src="%url%"></div><div class="remove-avenger"><p class="remove-avenger">Remove Avenger &#10006; </p></div></div>';

    let newHtml = html.replace('%alias%', userAlias.value);
    newHtml = newHtml.replace('%powers%', userPowers.value);
    newHtml = newHtml.replace('%name%', userFullname.value);
    newHtml = newHtml.replace('%firstAppearance%', userFirstAppearance.value);
    newHtml = newHtml.replace('%url%', userImage.value);
    display.insertAdjacentHTML('beforeend', newHtml);
    e.preventDefault();

}

function removeAvenger(){
    if(e.target.parentElement.classList.contain('.remove-avenger')){
        /* e.target.parentElement.parentElement.remove(); */
        console.log(e.target.parentElement);
    }
}
