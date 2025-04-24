let etudiant = {
    nom: "Elhajoui",
    prenom: "Youssef",
    age: 22,
    cne: "A12345"
};

let professeur = {
    nom: "Benali",
    age: 40,
    cin: "K789456"
};

etudiant.etudier = function() {
    console.log($ `{ this.prenom } etudie.`);
};

professeur.enseigner = function() {
    console.log(`$ { this.nom } enseigne.`);
};

let etudiants = [
    { nom: "Ali", prenom: "Karim", age: 22 },
    { nom: "Zahra", prenom: "Amal", age: 20 },
    { nom: "Badr", prenom: "Yassine", age: 23 }
];

etudiants.sort((a, b) => {
    if (a.nom !== b.nom) return a.nom.localeCompare(b.nom);
    if (a.prenom !== b.prenom) return a.prenom.localeCompare(b.prenom);
    return a.age - b.age;
});