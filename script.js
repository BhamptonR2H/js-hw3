//EASY
function exercise(x) {
  return "Today's exercise is " + x;
}
let bike = exercise("Biking");
var swim = exercise("Swimming");
console.log(bike);
console.log(swim);

//MEDIUM
function cutPizzaSlices(slices, people) {
  return `Each person gets ${slices / people} slices of pizza`;
}
console.log(cutPizzaSlices(12, 2));
console.log(cutPizzaSlices(8, 3));


// Hard
class Data {
  #name;
  #ssn;
  constructor(name, ssn) {
    this.#name = name;
    this.#ssn = ssn;
  }
  get name (){
    return this.#name;
  }
}
let person3 = new Data("Rey Mysterio", 619);
console.log(person3.ssn);
console.log(person3.name);

// Very Hard
class Person{
  constructor (name, job, age){
    this.name = name;
    this.name = job;
    this.name = age;
  }
}
Person.prototype.exercise = () => console.log("Running is fun! - said no one ever");
Person.prototype.fetchJob = function() {
  console.log(`${this.name} is a ${this.job}`)
};
class Programmer{
  constructor (name, job, age, languages){
    Person.call(this, name, job, age );
  
  }}
// Got Stuck :( Not sure where to go from here 