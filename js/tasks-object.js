'use strict';

// Перебери об'єкт apartment, використовуючи цикл for...in,
//  і запиши в масив keys всі його ключі, 
//  а в масив values всі значення його властивостей.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);

// }

// console.log(keys);
// console.log(values);

// ==========================================================================================
// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. 
// Запиши у змінну keys масив ключів властивостей об'єкта apartment,
//  і додай в масив values всі значення його властивостей.

 
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };

//   const values = [];
//   const keys = Object.keys(apartment);

//   for (let key of keys) {
//     values.push(apartment[key]);
//   }


  
//   console.log(keys); // Масив ключів
//   console.log(values); // Масив значень

//   =====================================================================================
// Виконай рефакторинг функції countProps(object),
//  замінивши перебір ключів за допомогою циклу for…in на метод Object.keys() 
//  для отримання масиву властивостей.
//  Функція має повернути кількість властивостей в об'єкті object.

// function countProps(object) {
//     /
//   const propCount = Object.keys(object);

//     return propCount.length;
//   }
//   console.log(countProps({}));
//   console.log(countProps({ name: "Mango", age: 2 }));
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


//                         OR 

//   function countProps(object) {
//     / let propCount = 0;
  
//     for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//         propCount += 1;
//       }
//     }
//   }

// ===========================================================================================

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. 
// Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, 
// та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, 
// щоб вона повертала загальну суму зарплат всіх співробітників.

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const valuesSalary = Object.values(salaries);
//     for (let salary of valuesSalary) {
//         totalSalary += salary;
//     }
//     return totalSalary;
//   }
// console.log(countTotalSalary({}));  
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));  
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));  
// ==========================================================================================

// Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і 
// має властивості hex і rgb з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of. 
// Додай у масив hexColors значення властивостей hex,
//  а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
  
//   const hexColors = [];
//   const rgbColors = [];
  
//   for ( const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }
//   console.log(hexColors);
//   console.log(rgbColors);

// ============================================================================================
// Функція getProductPrice(productName) приймає один параметр productName - назва продукту. 
// Функція містить масив об'єктів products з такими властивостями, 
// як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) 
// в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, 
// функція повинна повертати null.

// function getProductPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
  
  
//   for (let i = 0; i < products.length; i++) {
//    if (products[i].name === productName) {
//     return products[i].price;
//    }
   
//   }
//   return null;
// }
//   console.log(getProductPrice("Radar"));
//   console.log(getProductPrice("Scanner"));
//   console.log(getProductPrice("Droid"));
//   console.log(getProductPrice("Grip"));
//   console.log(getProductPrice("Engine"));
  
//   ===================================================================================================
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
//  Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. 
//  Якщо в об'єктах відсутні властивості з таким ім'ям, 
// функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];

// const array = [];
// for (let i = 0; i < products.length; i++) {
//     if (products[i].hasOwnProperty(propName)) {
//          array.push(products[i][propName]);
//     }
// }
//  return array;

//   }
  

//   console.log(getAllPropValues("name"));
//   console.log(getAllPropValues("quantity"));
//   console.log(getAllPropValues("price"));
//   console.log(getAllPropValues("category"));
//   =========================================================================================

// Функція calculateTotalPrice(productName) 
// приймає один параметр productName- назва товару. 
// Функція містить масив об'єктів products з такими властивостями, 
// як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) 
// товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок 
// "Product <productName> not found!" , де <productName> — це ім'я товару.

// function calculateTotalPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     for (let i = 0; i < products.length; i ++){
//         if (productName === products[i].name)
//         return products[i].price * products[i].quantity;
//     }
//     return  `Product ${productName} not found!`   
//   }

//   console.log(calculateTotalPrice("Blaster"));
//   console.log(calculateTotalPrice("Radar"));
//   console.log(calculateTotalPrice("Droid"));
//   console.log(calculateTotalPrice("Grip"));
//   console.log(calculateTotalPrice("Scanner"));
//   =====================================================================================================