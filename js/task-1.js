//Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо відвідувач ввів інше число - попросити
//ввести ще раз і так далі.
//Цикл має питати число, поки відвідувач не
//введе число більше 100, або натисне кнопку
//скасування в prompt


// function checkNumber() {
//     let number = prompt("Hello, add number > 100 !!!")
//     console.log(number)


//      while(number < 100){
//         number = prompt("Add number > 100 !!!")
//      }

// }
// checkNumber()

// =========================================================================================================

// У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).


// =================================================================================


// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. 
// Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

function getLastElementMeta(array) {
   const lastIndex = array.length - 1;
   const lastElement = array[lastIndex];
   return [lastIndex, lastElement];
   
 }
//   ========================================================================================
// Функція getLength(array) очікує один параметр array - масив довільних значень. Доповни код функції так,
//  щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

function getLength(array) {
   const joinLendth = array.join("");
   return joinLendth.length;
 }
// =======================================================================================
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, 
// залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). 
// Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message)
//  та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
   const word = message.split(" ");
   const wordLetter = word.length;
   const totalPrice = wordLetter * pricePerWord;
   return totalPrice;
   
 }
//  ====================================================================================================

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1) ;
const lastThreeEls = fruits.slice (-3);
// ===================================================================================================

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

function getSlice(array, value) {
  
   const index = array.indexOf(value);
   
   if (index === -1){
     return []
   } else {
     return array.slice(0, index + 1)
   }
 }
//  ===================================================================================================

// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, 
// щоб вона повертала масив усіх цілих чисел від значення min до max включно.

