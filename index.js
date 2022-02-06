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
  "https://pixabay.com/no/photos/gepard-dyr-dyreliv-pattedyr-3749168/"
);
// calling the constructor function to create second object
let secondAnimal = new Animal(
  "Bird",
  "Penguin",
  "Antarctica",
  "Black and white",
  "https://pixabay.com/no/photos/antarktis-penguin-pingvin-dyr-sn%c3%b8-3427135/"
);

// console logging the values from the two objects craeted above
console.log(firstAnimal.name);
console.log(secondAnimal.color);
console.log(firstAnimal.species);
console.log(secondAnimal.imgUrl);
console.log(firstAnimal.country);
