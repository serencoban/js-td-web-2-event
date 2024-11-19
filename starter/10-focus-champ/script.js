/* EXERCICE 10 :
Au focus sur le champ, vide-le et change sa couleur de fond. Lorsqu'on clique en dehors, sa couleur de fond redevient transparente.
- VERSION 1 :
	Ne le fais que pour le champ prénom
- VERSION 2 :
	Fais-le pour le champ prénom et pour le champ nom séparément avec des fonctions différentes
- VERSION 3 :
	Fais-le de manière générique avec une seule fonction qui peut s'adapter au champ sur lequel on l'applique et associe cette fonction à tous les champs texte de la page en parcourant ceux-ci avec une boucle for.
*/

// Un seul champ
//dans le 2eme paramtre de addeventlisten, on met evt, pour avoir la cible de l'element qui vient de se produire


//document.querySelector('input[type=text]').   //mais on a pas de style dans notre html, donc on va utiliser uen methode pour calculer grace a getcomputedstyle
// si ya un tableau, il faut une boucle, il faut le parcourir
/*
for (const textInputElement of textInputElements) {
    textInputElement.addEventListener('focus', (evt)=> {
        // TODO enlever ceci
        evt.currentTarget.value='';
        evt.currentTarget.style.backgroundColor= evt.currentTarget.dataset.backgroundColor;
    });

//elle va etre executer qd on quitte
    textInputElement.addEventListener('blur', (evt)=>{
        evt.currentTarget.style.backgroundColor='inputTypeTextBackgroundColorValue'
    });
}
*/


/*
-creation objet avec une methode innit (qu'on va appler de l'exterieur)
-on prend tout
-on enleve const et on met = en : et des ,
 */

const app = {
    textInputElements : document.querySelectorAll('input[type = text]'),
    formElement : document.querySelector('form'),
    // sectionElement : document.getElementsByClassName('material'),   // le problem c'est que c un tableaux "elementS" on veut juste un element donc
    sectionElement : document.querySelector('.material'),

    init() {
        this.inputTypeTextBackgroundColorValue = getComputedStyle(document.querySelector('input[type=text]')).backgroundColor;
        this.addEventListeners();
    },
    addEventListeners(){ //elle va parcour les textinputelement
        for (const textInputElement of this.textInputElements) {   // le navi regarde la methode, ya pas de const ensuite il regarde les variables globale, ya til un textuputelement ? non => ca ne fonctionne pas donc on doit mettre this
            textInputElement.addEventListener('focus', (evt)=> {
              this.focus(evt);
            });

            textInputElement.addEventListener('blur', (evt)=>{
                this.blur(evt);
            });
        }
        this.formElement.addEventListener('submit', (evt)=>{
            this.sayHello(evt);
        })
    },
    focus(evt) {
        // TODO enlever ceci
        evt.currentTarget.value='';
        evt.currentTarget.style.backgroundColor= evt.currentTarget.dataset.backgroundColor;
    },
    blur(evt){
        evt.currentTarget.style.backgroundColor='inputTypeTextBackgroundColorValue'
    },

    sayHello(evt) {
        evt.preventDefault();
        let textContent ='bonjour '
        for (const textInputElement of this.textInputElements) {
            textContent +=textInputElement.value + ' ' ;
        }
    this.sectionElement.insertAdjacentHTML('beforeend', `<p>${textContent}</p>`)
    }
};
app.init();
// Deux champs


// Plusieurs champs