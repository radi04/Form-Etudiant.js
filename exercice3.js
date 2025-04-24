class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    afficher() {
        console.log(($ `{ this.x }, $ { this.y }`));
    }

    ajouter(v) {
        return new Vecteur2D(this.x + v.x, this.y + v.y);
    }
}

let v1 = new Vecteur2D();
let v2 = new Vecteur2D(3, 4);
v1.afficher();
v2.afficher();
v1.ajouter(v2).afficher();

class Rectangle {
    constructor(longueur = 1, largeur = 1) {
        this.nom = "rectangle";
        this.longueur = longueur;
        this.largeur = largeur;
    }

    surface() {
        return this.longueur * this.largeur;
    }

    afficher() {
        console.log($ `{ this.nom } - Surface: $ { this.surface() }`);
    }
}

class Carre extends Rectangle {
    constructor(cote = 1) {
        super(cote, cote);
        this.nom = "carré";
    }
}

let r = new Rectangle(4, 5);
let c = new Carre(3);
r.afficher();
c.afficher();

class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}

class Segment {
    constructor(x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }
}