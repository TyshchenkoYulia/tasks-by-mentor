
// Функція makePizza повертає рядок з повідомленням клієнту.

// Доповни код таким чином, щоб у змінній result був результат
//  виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.



// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
  
//   const result = makePizza();
//   const pointer = makePizza;
//   console.log(makePizza());
//   console.log(makePizza);

// ===================================================================================================

// Функція makeMessage приймає один параметр ім'я піци, що доставляється, 
// pizzaName та повертає рядок з повідомленням клієнту.

// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром 
// (параметр callback) колбек-функцію і повертала результат її виклику. 
// Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage 
// і очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }


// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));
// ==========================================================================================================

// Функція calculateTotalPrice(orderedItems) 
// приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів,
//  яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Доповни виклик метода forEach, передавши йому колбек-функцію, 
// яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function calculateTotalPrice(item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// =========================================================================================================

// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers 
// і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, 
// які більші за значення другого параметра числа value. Якщо таких значень не буде знайдено,
//  функція повертає порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
  
//     let newArray = [];
//     numbers.forEach(function(number) {
//       if (number > value) {
//         newArray.push(number)
//       };
//   })
//   return newArray;
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// ====================================================================================================

// Виконай рефакторинг функції calculateTotalPrice(orderedItems), 
// замінивши її оголошення на стрілочну функцію. 
// Також заміни колбек-функцію, передану в метод forEach(),
//  на стрілочну функцію.


// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
  
//   orderedItems.forEach ((item) => totalPrice += item);
    
  

//   return totalPrice;
// }
//                                         OR

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// ======================================================================================================

// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }
//                                 OR

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach ((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// =========================================================================================================

