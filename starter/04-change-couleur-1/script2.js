/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Ta mission est toujours la même : au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
    - Mais cette fois, tu vas le faire en n'utilisant qu'une seule fonction (colorie), au lieu de quatre fonctions différentes…
    Première idée : stocke la couleur dans le code HTML du bouton et récupère-la dans la fonction colorie.
    PRESSÉ ? : copie-colle le code de l'exercice précédent et repars de là, il n'y a qu'à l'adapter un petit peu.
    - BONUS : Une fois que c'est fait, apporte encore une seconde amélioration à ton code : au lieu de faire quatre appels de fonction différés (un pour chaque bouton), parcours la liste des boutons avec une boucle (utilise ici la boucle for… of) et affecte-leur l'écouteur d'événement dans la boucle.
*/
function colorie(evt) {
    const couleur = evt.target.dataset.color; // lire la valeur du bouton cliqué
    document.body.style.backgroundColor = couleur;
}
const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', colorie);
};



