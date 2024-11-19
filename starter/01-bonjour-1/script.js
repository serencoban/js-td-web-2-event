/*
Les programmes JavaScript que nous avons écrits jusqu'ici s'exécutaient automatiquement dès leur chargement par la page web. L'exécution des fonctions se faisait au moment où le programme lisait la ligne de code (appel de fonction direct) et les interactions avec l'utilisateur se limitaient à la saisie de valeurs au moyen de l'instruction prompt().

JavaScript permet de rendre une page web interactive : la page va pouvoir réagir aux actions de l'utilisateur (clic sur un bouton, remplissage d'un formulaire,…). Cela veut dire que, **quand l'utilisateur va faire une action** (par exemple cliquer), cette action va déclencher un événement (par exemple, l'événement "click") et la page va réagir en exécutant une action (donc une fonction).

L'exécution de la fonction ne sera donc plus directe (appel de fonction direct, au moment où le programme lit la ligne de code), mais différée dans le temps. Le moment d'exécution va dépendre de l'action de l'utilisateur, la fonction va s'exécuter "quand l'utilisateur aura cliqué". Dans ce cas, on dit qu'on fait un « appel de fonction différé ».

Ce mode de fonctionnement est appelé programmation événementielle. Il est utilisé par les interfaces graphiques et toutes les applications en interaction avec un utilisateur.
*/
/*
Comment est-ce que JavaScript va faire ça ?

Grâce à un modèle dit « par délégation d'événement ». Cela veut dire que JavaScript délègue le travail à un écouteur d'événement.

On va ajouter un écouteur d'événement sur un élément (par exemple le bouton). Cet écouteur va surveiller quand l'événement (par exemple le clic) se produit et va exécuter la fonction lorsque l'événement se produira.

Comment ? Grâce à la méthode addEventListener() qui est une méthode de l'objet Node dont héritent tous les objets de type Window, document, Element, ...).

La méthode addEventListener() prend deux paramètres : l'événement à écouter (click, focus, …) et la fonction à exécuter. La fonction sera appelée à chaque fois que l'événement se déclenchera sur l'élément.

ELEMENT.addEventListener(EVENEMENT, FONCTION);
=> une association élément-événement-réaction
   = un appel de fonction différé
3 ingrédients :
	1) un élément = une balise = un OBJET
	2) un événement = click, focus, keydown, keypress, keyup, load, …
	3) une réaction = une fonction
*/

/*
EXERCICE 1 :
Affiche bonjour dans une boîte de dialogue au clic sur le bouton
*/ // objet de type element, elle represente notre bouton
document.getElementById('hello').addEventListener('click',()=> console.log('hello') )
/*
TRADUCTION :
Quand l'événement "click" se produit sur l'élément "bouton" de l'interface, exécute la fonction "direBonjour"
*/
/*
MÉTHODE :
1. déclarer une fonction direbonjour
2. récupérer l'élément "bouton" qui doit réagir
3. ajouter à ce bouton un gestionnaire d'événement avec la méthode  addEventListener() qui va écouter le clic (événement click) et qui, au clic sur le bouton,  déclenchera l'appel de la fonction direbonjour.
*/

// Autre écriture : avec une fonction anonyme
const direBonjour = document.getElementById("hello");
direBonjour.addEventListener('click', function (){
    console.log(direBonjour)
})
// Écriture ES6