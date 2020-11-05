

console.log(`Witaj w konsoli, aktualnie nie mam nic do powiedzenia`);

const names = 'Przemek';
const ages = '36';

console.log(`Witaj w konsoli, nazywam się ${names} i mam ${ages} lat`);



const kupa = document.querySelector(".recipes__description--js");

kupa.innerHTML = `dupa dupa dupa`;

console.log(kupa.innerHTML);


function greet (age, firstName) {
 console.log (`Cześć nazywam się ${firstName} i mam ${age} lat`);
}

greet (36, `Przemek`);


const secondGreet = (fingers, secondName) => {
    console.log (`Czołem, nazywam się ${secondName} i mam ${fingers} palców`)
}

secondGreet (20, `Jerzy`);


const greetings = { 
    infos: (strength, thirdName) => {
        console.log(`Witaj, mam na imię ${thirdName} i mam ${strength} siły`) 
    }
}
greetings.infos (`50%`, `Tytus`);




const breadMenu = document.querySelector('.bread-menu--js');
breadMenu.addEventListener('click' , ()=> {
    const nav = document.querySelector ('.navigation--js');
    nav.classList.toggle('navigation--open');
})
