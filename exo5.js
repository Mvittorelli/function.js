function estMajuscule(chaine) {
    return chaine === chaine.toUpperCase();
  }
  console.log(estMajuscule("HELLO")); // Résultat attendu : true
  console.log(estMajuscule("Hello")); // Résultat attendu : false