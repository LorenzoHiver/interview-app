# Notes

## Les points positifs :

- Composants et pages bien découpés, compréhension rapide
- Store bien setup

## Les points Négatifs :

- Redux/Redux-Saga trop overkill pour un projet si petit ?
- Les noms des fichiers ? .components ou non ? utilisations de l'index.js vraiment nécessaire ?
- Système de loading  trop complexe, pourquoi ne pas utiliser le Lazy loading de React avec un Suspense au niveau du router ?
- Manque de test et de commentaires ? 
- pourquoi ne pas utiliser l'history de react-router ? 


## Les choses à améliorer :

- Mise en place de test
- Meilleure gestion de l'architecture des fichiers (au niveau des imports/export qui sont trop tentaculaires pour un si petit projet)
- Utilisations des hooks UseSelector et UseDispatch de redux pour avoir un code plus lisible ?
- Atomic CSS pour une meilleure compréhension du css et meilleur lisibilité de l'architecture ?