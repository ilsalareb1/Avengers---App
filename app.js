

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

const form = documnet.querySelector('#hero-form');//could also getElementByID
const userAlias = document.querySelector('#alias');
const userPowers = document.querySelector('#powers');
const userFullname = document.querySelector('#full-name');
const userFirstAppearance = document.querySelector('#first-appearnance');
const userImage = document.querySelector('#image');


