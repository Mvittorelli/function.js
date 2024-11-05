function estPair(nombre) {
    if (nombre % 2 === 0) {
      return "Paire";
    }
    else {
      return "Impaire";
    }
  }
  console.log(estPair(4)); // Résultat attendu : true
  console.log(estPair(7)); // Résultat attendu : false