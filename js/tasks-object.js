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

function countTotalSalary(salaries) {
    let totalSalary = 0;
    const valuesSalary = Object.values(salaries);
    for (let salary of valuesSalary) {
        totalSalary += salary;
    }
    return totalSalary;
  }
console.log(countTotalSalary({}));  
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));  
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));  