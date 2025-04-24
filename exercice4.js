class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Post {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }
}

let users = [];
let posts = [];

// Convertir en JSON
let jsonData = JSON.stringify({ users, posts });

// Reconvertir en objet
let data = JSON.parse(jsonData);