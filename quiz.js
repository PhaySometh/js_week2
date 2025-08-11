function feedAnimal(animal = "Dragon") {
  return `${animal} is eating cookies`;
}
console.log(feedAnimal());

function doNothing() {
  console.log("Doing nothing...");
}
console.log(doNothing());

const add = (x = 1, y = 2) => x + y;
console.log(add(), add(5), add(2, 10));

const getAnimal = () => {
  const animals = ["Cat", "Dog", "Duck"];
  return animals[Math.floor(Math.random() * animals.length)];
};
console.log(typeof getAnimal());