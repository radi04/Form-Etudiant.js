//1

let books = ["L'Alchimiste", "1984", "Le Petit Prince"];
books.push("Python 101");
console.log(books);
books.unshift("HTML pour débutants");
console.log(books);
books.pop();
console.log(books);
books.shift();
console.log(books);


//2
let categories = new Set(["Fiction", "Science", "Histoire"]);
categories.add("Poésie");
categories.add("Fiction");
categories.delete("Science");
console.log(categories);

//3
let borrows = new Map();
borrows.set("1984", "Ahmed");
borrows.set("Le Petit Prince", "Sara");
borrows.set("L'Alchimiste", "Youssef");
borrows.delete("1984");
console.log(borrows.has("1984"));
console.log(borrows);