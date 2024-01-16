'use strict';

// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
  
//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;

//   console.log(parent);
//   console.log(child);
//   console.log(child.name);
//   console.log(child.age);
// ============================================================================

// const customer = {
// 	username: "Jacob"
// };

// const animal = { 
// 	legs: 4 
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false
// ==============================================================================

// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }
// ===========================================================================
// Зміни код, побудувавши ланцюжок прототипів таким чином,
//  щоб об'єкт ancestor був прототипом для parent, 
// а той, своєю чергою, був прототипом для child.

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
  
//   const parent = Object.create(ancestor);
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;
  
//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;

//   console.log(ancestor);
//   console.log(child.surname);
//   console.log(child.age);
//   console.log(child.heritage);
//   console.log(parent.name);
//   console.log(ancestor.name);
// ==========================================================================
