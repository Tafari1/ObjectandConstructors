//person object with method, constructors are used to create multiple objects
function person(firstName, surName, age) {
  this.firstName = firstName;
  this.surName = surName;
  this.age = age;

  this.fullName = function () {
    return `This is the persons full name: ${firstName} ${surName}`;
  };
}
//creating first person
let person1 = new person("david", "lee", 36);
console.log(person1);

console.log(person1.fullName());
const person2 = new person("Linda", "London", "23");
//add nationality to the persons attribute
person2.nationality = "Spanish";
console.log(person2);

console.log(person2.fullName());

//adding function to change name using the prototype method. if not used it won't work
person.prototype.changeName = function (name) {
  this.surName = name;
};
//changing person2 name
person2.changeName("chris");
console.log(person2);
