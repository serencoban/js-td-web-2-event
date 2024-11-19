/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/
const redElt = document.getElementById("red");
redElt.addEventListener("click", ()=> {
    document.body.style.backgroundColor = 'red'
});

const greenElt = document.getElementById("green");
greenElt.addEventListener("click", ()=> {
    document.body.style.backgroundColor = 'green'
});

const yellowElt = document.getElementById("yellow");
yellowElt.addEventListener("click", ()=> {
    document.body.style.backgroundColor = 'yellow'
});

const blueElt = document.getElementById("blue");
blueElt.addEventListener("click", ()=> {
    document.body.style.backgroundColor = 'blue'
});

