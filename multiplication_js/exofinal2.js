//*******************************************************************Donnons une variable à NB************************************************************//

var nb = 0;

//*******************************************************************Donnons une valeur à NB ( exemple 7)************************************************************//
nb = parseInt (window.prompt("Veuillez saisir le chiffre à multiplier"));


//*******************************************************************La fonction de la table de multiplication************************************************************//
function tableMultiplication(nb){                           //**function de multiplication (valeur nb) **/
    for (let i = 1; i < 13 ; i++){                          //** On laisse i = 1 , on veut que i s'arrête de compter jusqu'à <13(donc12) , on laisse i++ ( donc 1+1+1+1) jusqu'à 12**/
        document.write(`${nb}x${i}=${+nb*i}<br>`);          //**Si Respecté , on ecrit sur le document ( va afficher à l'écrit) nb * i = nb*i (br sert à les mettres de haut en bas et non alligné **/
    }
}

tableMultiplication(nb);                     //**Execute la commande function tableMulitiplication(nb) **/