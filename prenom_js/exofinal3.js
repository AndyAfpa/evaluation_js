//**création d'un tableau avec des prénoms comme données **//
 
 var tab = ["Audrey","Aurelien", "Flavien", "Jeremy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stephane"];


 //*Création d'une variable "prénom" pour pourvoir entrer un prénoms spécifique dans le tableau*//
 {
    var prenom = window.prompt("Veuillez choisir un prénom Audrey, Aurelien, Flavien,Jeremy,Laurent,Melik,Nouara,Salem,Samuel,Stephane. ")

 //*Variable du rang  qui va = à l'emplacement du prenom dans le tableau ( 10 prenom mais commence à 0 donc Flavien n'est pas le 3 ieme mais le 2ieme rang (voir var tab)*//


      var rang = tab.indexOf(prenom);
 
 //*Retire un element  du tableau (on retire sup = tab.splice (rang (= prenom , 1 = surpprime 1 données à partir du prenom))*//
if (rang>=0)
{
      var sup = tab.splice(rang,1);
      console.log(rang+sup)
//*Rajoute un element pour que le tableau garde son nombre de donnée même si on retire une donnée via un splice et ajoute une valeur vide =""*//
      var nb = tab.push("");
 
      console.log(tab);
 
  }

  //*Si prenom non existant alors affiche Mauvais prénom*//
  else {
      alert ("Mauvais prénom")
 
 }
 }