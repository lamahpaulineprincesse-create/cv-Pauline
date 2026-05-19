// ============================================
// ANIMATION DES BARRES DE COMPÉTENCES
// ============================================

// On attend que toute la page soit bien chargée
window.addEventListener('load', () => {

  // On attend 700ms avant de lancer l'animation
  // (pour que le CV ait le temps d'apparaître d'abord)
  setTimeout(() => {

    // On cherche TOUTES les barres dans la page
    // (tous les éléments avec la classe .skbar-fill)
    document.querySelectorAll('.skbar-fill').forEach(barre => {

      // Chaque barre a un attribut data-w dans le HTML
      // Exemple : <div class="skbar-fill" data-w="90">
      // On lit cette valeur et on l'applique comme largeur CSS
      barre.style.width = barre.dataset.w + '%';

      // Résultat : la barre passe de 0% à 90% (par exemple)
      // Le CSS gère l'animation smooth avec "transition: width 1.4s"

    });

  }, 700); // délai de 700 millisecondes

});


// ============================================
// RÉSUMÉ DE CE QUE FAIT CE FICHIER
// ============================================
//
// 1. La page se charge
//        ↓
// 2. On attend 700ms
//        ↓
// 3. On trouve toutes les barres .skbar-fill
//        ↓
// 4. Pour chaque barre, on lit son data-w
//    Exemple : data-w="90" → width = "90%"
//        ↓
// 5. Le CSS fait l'animation automatiquement
//    (transition: width 1.4s)
//        ↓
// 6. La barre glisse de 0% → 90% ✅
//
// ============================================