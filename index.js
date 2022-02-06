// created a class
class Animal {
  constructor(species, name, country, color, imgUrl) {
    this.species = species;
    this.name = name;
    this.country = country;
    this.color = color;
    this.imgUrl = imgUrl;
  }

  feedAnimal() {}
}
// calling the constructor function tp craete the first object with the following values
let firstAnimal = new Animal(
  "Cat-Family",
  "Cheetah",
  "Iran",
  "yellow",
  "cheetah.jpeg"
);
// calling the constructor function to create second object
let secondAnimal = new Animal(
  "Bird",
  "Penguin",
  "Antarctica",
  "Black and white",
  "pinguin.jpeg"
);

// console logging the values from the two objects craeted above
console.log(firstAnimal.name);
console.log(secondAnimal.color);
console.log(firstAnimal.species);
console.log(secondAnimal.imgUrl);
console.log(firstAnimal.country);
// oppgave 3: skrive ut kort til hver object
let cheetahCard = document.getElementById("cheetah-card");
let cheetahHeading = document.getElementById("cheetah-heading");
let cheetahText = document.getElementById("cheetah-text");
let cheetahButton = document.getElementById("cheetah");

let img = document.createElement("img");
cheetahCard.appendChild(img);
img.src = firstAnimal.imgUrl;
img.height = 160;

cheetahHeading.innerHTML = firstAnimal.name;
cheetahText.innerHTML = `Color : ${firstAnimal.color}`;
