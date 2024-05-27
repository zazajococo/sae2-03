var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var moisEnLettres = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
    "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];
var moisNumero = parseInt(mm, 10) - 1; // Les mois commencent à 0 dans l'objet Date
var moisLettre = moisEnLettres[moisNumero];
var yyyy = today.getFullYear()
document.getElementById("jour").innerText = 'Jour : ' + dd;
document.getElementById("mois").innerText = 'Mois : ' + mm + ' / ' + moisLettre;
document.getElementById("annee").innerText = 'Année : ' + yyyy;