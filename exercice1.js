function Voiture(model, marque, annee, type, carburant) {
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.carburant = carburant;
}

let voitures = [
    new Voiture("Tucson", "Hyundai", 2020, "SUV", "Essence"),
    new Voiture("Fiesta", "Ford", 2018, "Citadine", "Diesel"),
    new Voiture("Sonata", "Hyundai", 2021, "Berline", "Hybride")
];

class Hyundai extends Voiture {
    constructor(model, marque, annee, type, carburant, serie, hybride) {
        super(model, marque, annee, type, carburant);
        this.serie = serie;
        this.hybride = hybride;
    }

    alarmer() {
        console.log("Alerte de sécurité Hyundai !");
    }
}

class Ford extends Voiture {
    constructor(model, marque, annee, type, carburant, options) {
        super(model, marque, annee, type, carburant);
        this.options = options;
    }
}

voitures.sort((a, b) => a.annee - b.annee);
console.log(voitures);