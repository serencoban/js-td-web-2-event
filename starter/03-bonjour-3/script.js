/* EXERCICE 3 :
Au clic sur le bouton,
- affiche l'image bonjour.jpg dans la page
	sous le bouton (dans la section de classe "display") ;
- fais disparaître le bouton
*/


const buttonElt = document.getElementById("hello");
buttonElt.addEventListener('click', (evt)=>{
    const imgElt = document.createElement('img');
    imgElt.src = "bonjour.jpg"
    document.querySelector('.display').appendChild(imgElt);
} );
/*
Chaque type d'événement est associé à un objet Event spécifique qui fournit des informations sur l'événement via ses propriétés.

Quand l'événement se déclenche, JavaScript crée un objet Event qui peut être utilisé par la fonction. L'objet Event :
	- a notamment la propriété currentTarget, qui renseigne la cible de l'événement (c.-à-d. l'élément qui a déclenché la fonction) ;
	- est fourni à la fonction sous la forme d'un paramètre (qu'on appelle souvent e, ou event).
*/

/* EXERCICE 3bis :
- recopie le code de l'exercice 3 et ajoute une ligne dans la fonction direBonjour qui affiche dans la console la valeur de currentTarget ;
- utilise cette information pour adapter le code qui fait disparaître le bouton
*/


/* N.B. e.currentTarget représente, en français, "la cible du clic", c.-à-d. ici le bouton sur lequel on vient de cliquer, donc le bouton qui a déclenché la fonction.
À l'intérieur de la fonction, c'est donc un moyen automatique de faire référence à l'élément qui a déclenché la fonction.
C'est une notion IMPORTANTE, essentielle, très très souvent utilisée dans la programmation événementielle.
*/

// autre écriture



// Écriture ES6