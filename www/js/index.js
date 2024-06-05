function calculerAge() {
  const anneeNaissance = Number(naissance.value);

  const age = new Date().getFullYear() - anneeNaissance;

  const resultat = document.getElementById('resultat');
  resultat.innerHTML = `Vous avez ${age} ans !`;

  const resultatArea = document.querySelector('fieldset');
  resultatArea.hidden = false

  // la commande pour le lancer dans un emulateur android : 
  //cordova emulate android
}
