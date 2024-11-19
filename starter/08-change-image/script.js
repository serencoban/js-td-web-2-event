/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 8 :
Au clic sur l'image, change sa source par celle qui se trouve dans son attribut "data-hover".
BONUS : switche entre les deux images : quand on re-clique, tu reviens à l'image originale et ainsi de suite
*/
/* 
AIDE POUR LE BONUS :
Pour réaliser cet effet, il suffit d'échanger le contenu des deux propriétés src et dataset.hover :
	* au clic 1, on met l'image de data.hover dans src et celle de src dans data.hover => dans src, il y a à présent la nouvelle (on affiche donc bien la nouvelle) et maintenant, dans data.hover, il a l'ancienne
	* au clic 2, on met l'image de data.hover (qui contient à présent l'ancienne) dans src et celle de src (qui contient l'ancienne) dans data.hover => dans src, il y a à présent à nouveau l'ancienne (on réaffiche l'ancienne) et maintenant, dans data.hover, il a la nouvelle
	* etc., ainsi de suite
*/
/*
Parenthèse : comment échanger le contenu de 2 variables ?
La méthode classique est de créer une variable temporaire, comme ceci : 
	var a, b, t;
	a = 2;
	b = 3;
	t = a;
	a = b;
	b = t;
	console.log(`a vaut ${a} et b vaut ${b}`);
*/



// version de base
/**********
const imgElement = document.querySelector('img');
const src = imgElement.src;
const dataHover = imgElement.dataset.hover;
imgElement.addEventListener('click', function (evt){
    if (evt.currentTarget.src === src){
        evt.currentTarget.src = dataHover;
    }else{        // quand on a deja une fois clické
        evt.currentTarget.src = src;
    }
});
*********/

// on va permuter la valeur de l'attribut src avec la valeur d'attribut dataset

document.querySelector('img').addEventListener('click', function (e){
    [
        e.currentTarget.src , e.currentTarget.dataset.hover
    ]=[
        e.currentTarget.dataset.hover, e.currentTarget.src
    ]
})

// BONUS : switch entre les deux images
