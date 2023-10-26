
/******************************************************************************Variable personnes selon age *********************************************************/

var jeunes = 0;
var adultes = 0;
var vieux = 0;
var personnes ;


/******************************************************************************Faire apparaître un champs pour savoir l'âge *********************************************************/
do {
personnes = parseInt (window.prompt("Entre votre age"));

/******************************************************************************Compte les saisies  jusqu'à <20 ans *********************************************************/
if ( personnes <20) {
jeunes++;
console.log(jeunes);
}
/******************************************************************************comptes les adultes >=20 && <=40 *********************************************************/

else if ((personnes >=20) && (personnes <=40)) {
adultes++;
console.log(adultes);
}
/******************************************************************************Autrement , compte les pers A si >40 et <=100 *********************************************************/

else if ((personnes >40 ) && (personnes <=100)) {
vieux++;
console.log(vieux);
}
}
/******************************************************************************Quand 100 est saisie (while) affiche alert + taux / participation *********************************************************/

while (personnes < 100);
window.alert("Il y a " + "" + jeunes + "" + " jeunes\n" + "Il y a " + "" + adultes + "" + " adultes\n" + "Il y a " + "" + vieux + "" +" vieux\n" + "dont "+ " 1 " + "" + " centenaire ");


