//Fonction qui calcul le coup total du voyage et le renvoi dans la page réservation

//Déclaration des variables et vérification du format de la date+calcul du cout

let totalCost = document.getElementById("prix");
let tripCost = localStorage.getItem('coutTotal');
idInput = ["dated", "dater","nbrenfant","nbradulte","ptitdej"]
for (let i=0; i <= idInput.length-1; i++) {
document.getElementById(idInput[i]).addEventListener('input', function() {
   goDate = new Date(document.getElementById('dated').value);
   returnDate = new Date(document.getElementById('dater').value)
   numberAdult =parseInt(document.getElementById('nbradulte').value);
   numberKids = parseInt(document.getElementById('nbrenfant').value);
   checkPtitDej = document.getElementById('ptitdej').checked;
   diffDate = returnDate-goDate;
   stayTime = diffDate/86400000;  
  if (checkPtitDej == true && goDate < returnDate){
    totalCost.innerHTML = stayTime*tripCost*numberAdult+stayTime*tripCost*0.4*numberKids+12*stayTime*(numberKids+numberAdult)+'€'
  } else if (goDate < returnDate && checkPtitDej == false){
      totalCost.innerHTML = stayTime*tripCost*numberAdult+stayTime*tripCost*0.4*numberKids+'€'
 }
  else if (goDate > returnDate || (parseInt(document.getElementById('nbradulte').value) == 0 && parseInt(document.getElementById('nbrenfant').value) > 0)){
      totalCost.innerHTML = "Calcul impossible"
  }
});}

// Fonction qui permet de vérifier que un enfant ne parte pas seul

function checkForm(){
    if(goDate > returnDate){
      alert(`Vous devez choisir une date de retour ultérieure à la date de départ`);
      return false
           }
    
    else if (parseInt(document.getElementById('nbradulte').value) == 0 && parseInt(document.getElementById('nbrenfant').value) > 0){
      alert(`Un enfant ne peut voyager seul veuillez selectionner au moins un adulte`);
      return false
    }
    else{
      return true
    }}

