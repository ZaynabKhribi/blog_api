const produits = [
  { nom: 'Clavier', prix: 45 },
  { nom: 'Écran', prix: 320 },
  { nom: 'Souris', prix: 25 }
];

//Déstructuration du premier produit
const { nom, prix } = produits[0];
console.log(nom, prix);

//Trouver Souris avec find
const souris = produits.find(p => p.nom === 'Souris');
console.log(souris.prix);

//Trouver les produits dont le prix est inférieur à 100
const produitsMoins100 = produits.filter(p => p.prix < 100);
console.log(produitsMoins100);

//Fonction fléchée avecRemise
const avecRemise = prix => prix - prix * 0.10;

console.log(avecRemise(320));