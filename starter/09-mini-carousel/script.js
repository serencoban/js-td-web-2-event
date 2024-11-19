/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 9 : 
Au clic sur le bouton, change la source de l'image par celle de l'image suivante dans le tableau <strong>gallery</strong>. Fais-en une boucle.
*/
/* 
AIDE : voici les étapes :
1. On initialise un index
2. On recherche l'élément img
3. On associe image aux éléments du tableau (suivant le numéro d'index)
4. On incrémente l'index de 1 pour faire défiler les images
5. En fin de longueur du tableau, on redémarre au début de l'index
*/
/********* on va les convertir en objet
let i = 0;
const imageSources =['./img/becode-seal.png', './img/bell.svg', './img/clock.svg', './img/compass.svg', './img/kiss.svg', './img/kiss-wink-heart.svg','./img/lemon.svg', './img/map.svg']
const imgElement = document.querySelector('img');       //represente mon img
 ;
*/

// on veut que tt le code se trouve à l'interieur de l'objet pour être protegé
// dans un objet ya pas vraiment de variable et de const
//tt les fonction vont devenir des propriétées

    // init et changeSrc sont devenu des methode de notre objet
    // this fait reference à l'objet courant, sinon le navigateur va essayé de chercher une variable



(
    function (){
        const caroussel ={
            i : 0,
            imageSources : ['./img/becode-seal.png', './img/bell.svg', './img/clock.svg', './img/compass.svg', './img/kiss.svg', './img/kiss-wink-heart.svg','./img/lemon.svg', './img/map.svg'],
            imgElement : document.querySelector('img'),
            buttonElement : document.getElementById('next'),
            init(){                //
                this.buttonElement.addEventListener('click', ()=> {
                    this.changeSrc();
                });  //on dit au navi que doit valoir this
            },
            changeSrc(){
                this.i++;
                if (this.i === this.imageSources.length){
                    this.i = 0;
                }
                this.imgElement.src = this.imageSources[this.i];
                console.log(caroussel)
            }
        }

        caroussel.init();
    }
)();   //appeler une fonction ano ()