/*
Un cas particulier d'attributs : les attributs de données data-*
=> HTMLElement.dataset
Voir tuto du MDN : https://developer.mozilla.org/fr/docs/Apprendre/HTML/Comment/Utiliser_attributs_donnes
Documentation du MDN : https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/dataset
*/

/*
On peut enregistrer des données supplémentaires
dont on aurait besoin pour notre JS dans le code HTML de notre page.
Comment ? On les enregistre dans des attributs personnalisables : data-*
data-* nous permet de créer nos propres attributs en remplaçant * par le nom qu'on veut.
Par exemple, je peux, dans une balise qui contient le nom d'un article,
enregistrer le n° d'article qu'il possède dans ma base de données dans un attribut data-index
et le nombre d'exemplaires en stock dans un attribut data-stock
*/
/*
Comment récupérer avec JS la valeur de ces attributs data-index et data-stock ?
On ne peut pas juste écrire Elt.data-index car cet attribut n'existe pas…
Tous les data-* sont stockés dans une propriété dataset qui est elle-même un objet.
Les attributs individuels sont eux-mêmes des propriétés de l'objet dataset.
=> On a une relation d'emboîtement (même principe que pour style) :
 * dataset est une propriété de ELt qui représente les attributs data-* => Elt.dataset
 * cette propriété dataset est elle-même un objet
 	qui contient les attributs *, par exemple ici index et stock
 	=> on accède à un attribut *, par exemple data-index, avec dataset.index
 * => Pour accéder à l'attribut data-index, on écrit Elt.dataset.index
*/
/* EXERCICE :
Affiche dans la console la valeur de l'attribut data-index de l'iPhone XS Max
et puis affiche "J'ai … iPhone(s) XS Max en stock"
*/

const stock = parseInt(document.getElementById('xs-max').dataset.stock);
let infos = '';

if (stock >1){
    /* console.log(`J’ai ${stock} iPhones XS Max en stock`)*/
    infos = `J’ai ${stock} iPhones XS Max en stock`;
}else if (stock ===1){
    /*console.log(`J’ai ${stock} iPhone XS Max en stock`)*/
    infos = `J’ai ${stock} iPhone XS Max en stock`
}else{
    /* console.log(`Je n’ai plus de stock`) */
    infos = `Je n’ai plus de stock`
}

document.querySelector("h1").insertAdjacentHTML('afterend', '<p>${infos}</p>')