'use strict'



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

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, 
// значення якого - це парне число, додаючи до нього значення параметра value, 
// який точно є числом.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - 
// не змінювала масив чисел numbers, а створювала, 
// наповнювала і повертала новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         numbers[i] = numbers[i] + value;
//       }
//     }
//   }
// ----------------------------------------------
// const changeEven = (numbers, value) => {
//     let newArray = [];

//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             newArray.push(number + value);
//         } else {
//             newArray.push(number);
//         }
//     })

//     return newArray;
// }


//   console.log(changeEven([1, 2, 3, 4, 5], 10));
//   console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
//   console.log(changeEven([17, 24, 68, 31, 42], 100));
//   console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// ========================================================================================

// В масиві planets зберігаються назви планет. Доповни код таким чином, 
// щоб у змінній planetsLengths вийшов масив,
//  що буде складатися з довжин назв кожної планети з масиву planets. 
//  Обов'язково використовуй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);
 

// console.log(planetsLengths);
// =====================================================================================

// Масив books містить колекцію об'єктів книг, 
// кожен з яких містить властивості title, author, rating. 
// Використовуючи метод map(), зроби так, 
// щоб у змінній titles вийшов масив назв усіх книг (властивість title) з масиву books.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//    const titles = books.map(book => book.title);
//     console.log(titles);

    // ========================================================================================================

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивість genres, 
//  значенням якої є масив жанрів. Використовуючи метод flatMap(), зроби так,
//  щоб у змінній genres вийшов масив жанрів усіх книг (властивість genres) з масиву books.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
  
//   const genres = books.flatMap(book => book.genres);

//   console.log(genres);
// =============================================================================================================

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.
// Доповни стрілочну функцію getUserEmails(users) таким чином,
// щоб вона повертала масив поштових адрес користувачів (властивість email) 
// з масиву об'єктів в параметрі users.


// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ];
//   const getUserEmails = users.map(users => {
//     return users.email;
//   });
//   const getUser = users.flatMap(users => {
//     return users.email;
//   });

//   console.log(getUserEmails);
//   console.log(getUser);
//   =========================================================================================================
// Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers,
//  а у змінній oddNumbers — масив непарних. Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 );

// console.log(evenNumbers);
// console.log(oddNumbers);
// =========================================================================================================

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
//  Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) 
// більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), 
// яке збігається зі значенням у змінній AUTHOR.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
  
//   const topRatedBooks = books.filter(books => books.rating >= MIN_RATING);
//   const booksByAuthor = books.filter(books => books.author === AUTHOR);

//   console.log(topRatedBooks);
//   console.log(booksByAuthor);
//   ==================================================================================================
// Доповни функцію getUsersWithEyeColor(users, color) таким чином, 
// щоб вона повертала масив користувачів,
//  у яких колір очей (властивість eyeColor) збігається зі 
//  значенням другого параметра color.

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ]
//   const getUsersWithEyeColor = (users, color) => {
//     return users.filter(users => users.eyeColor === color)
//   };
// ==================================================================================================
// Доповни код функції getUsersWithAge(users, minAge, maxAge), 
// щоб повернути масив користувачів, 
// вік (збережений у властивості age) яких потрапляє
//  у заданий діапазон від minAge до maxAge.

// Поради:

// Використай метод filter() для створення нового масиву, 
// в якому зберігаються тільки елементи, які задовольняють певну умову.
// Використай оператори >= (більше або дорівнює) та <= (менше або дорівнює), 
// щоб відфільтрувати користувачів, вік яких точно потрапляє у діапазон між мінімальним minAge 
// та максимальним maxAge значеннями.
// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39
//     }
//   ]
// const getUsersWithAge = (users, minAge, maxAge) => {
//    return users.filter(users => users.age >= minAge && users.age <= maxAge)
// };
  
//   console.log(getUsersWithAge(users, 20,30));
//   ================================================================================================

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.

// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) 
// збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) 
// збігається зі значенням змінної AUTHOR.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   ];
//   const BOOK_TITLE = "The Dream of a Ridiculous Man";
//   const AUTHOR = "Robert Sheckley";
  
//   const bookWithTitle = books.find(books => books.title === BOOK_TITLE);
//   const bookByAuthor = books.find(books => books.author === AUTHOR);

//   console.log(bookWithTitle);
//   console.log(bookByAuthor);
// =============================================================================================
// Доповни функцію getUserWithEmail(users, email) таким чином, 
// щоб вона повертала об'єкт користувача, пошта якого (властивість email) 
// збігається зі значенням другого параметра email.

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ]

//   const getUserWithEmail = (users, email) => {
//     return users.find(users => users.email === email)
//   };
//   console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
//   console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));
//   console.log(getUserWithEmail(users));
// ===================================================================================================
// Ігровому сервісу необхідний функціонал підрахунку середнього часу,
//  проведеного в іграх, одним гравцем. У змінній players зберігається об'єкт, де ключ це ім'я гравця,
//   а значення - його ігровий час. У змінній playtimes зберігається масив значень об'єкта players, 
//   тобто масив ігрового часу усіх гравців. Значенням змінної averagePlayTime буде середній час, 
//   проведений одним гравцем в іграх.

// Доповни код таким чином, щоб у змінній totalPlayTime вийшов 
// загальний ігровий час з масиву playtimes.
//  Використовуй метод reduce().

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
  
//   const totalPlayTime = playtimes.reduce((previousValue, number) => 
//   previousValue += number);
  
//   const averagePlayTime = totalPlayTime / playtimes.length;

//   console.log(totalPlayTime);
//   console.log(averagePlayTime);

// =================================================================================================

// У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця,
//  і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame. 
//  Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) 
//  на кількість ігор (властивість gamesPlayed).

// Поради:

// Використовуй метод reduce() для ітерації по масиву players та обчислення 
// загальної суми середнього часу на одну гру.
// Усередині колбек функції reduce(), поділи playtime гравця на gamesPlayed, 
// щоб отримати середній час, витрачений на одну гру кожним гравцем.
// Накопичуй результат у змінній acc і повертай його в кінці кожної ітерації.
// Ініціалізуй параметр acc методу reduce() початковим значенням 0, 
// щоб уникнути отримання NaN при виконанні обчислень.
// В результаті змінна totalAveragePlaytimePerGame міститиме 
// загальну суму середнього часу на одну гру для всіх гравців.

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
  
//   const totalAveragePlaytimePerGame = players.reduce(
//     (total, players)  => 
//        total + players.playtime / players.gamesPlayed
//     , 0);
  
// console.log(totalAveragePlaytimePerGame);
// ================================================================================================

// Змінна releaseDates - це масив чисел, років видання книг. 
// Змінна authors - це масив рядків, авторів книг.

// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, 
// відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, 
// відсортована за алфавітом. Використовуй метод toSorted()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);
// ==================================================================================================
// Змінна releaseDates - це масив чисел, років видання книг.

// Онлайн бібліотеці необхідно відображати книги, відсортовані за датою видання,
//  за їх зростанням або спаданням. Доповни код таким чином, 
//  щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням,
//  а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);
// =======================================================================================================
// Змінна authors - це масив рядків, авторів книг.

// Онлайн бібліотеці необхідно відображати книги, 
// відсортовані за автором в алфавітному і в зворотному алфавітному порядку. 
// Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, 
// відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, 
// відсортована у зворотному алфавітному порядку.

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);
// ===========================================================================================================
// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, 
// відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, 
// відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);
// ===========================================================================================================
// Масив books містить масив об'єктів книг, 
// кожен з яких містить властивості title, author, rating.

// Доповни код таким чином, щоб у змінній names вийшов
//  масив імен авторів в алфавітному порядку,
//  рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. 
//  Використовуй ланцюжок методів.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
  
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b))
//   ;


//   console.log(names);
// =================================================================================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//   const userName = prompt("Enter your name!");
//     if (!userName) {
//       return
//     }
//     callback(userName)
// }
// function greet(name) {
//   console.log("Привіт ${name}");
// }
// letMeSeeYourName(greet);
// ======================================================================================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Math.random()
//   }
//   callback(product)
// }
// function showProduct(product) {
// console.log(product);
// }

// makeProduct("iphone", 1000, showProduct);
// =====================================================================================================
const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Rojer Vazquez",
    email: "ross@xinware.com",
    eyeColor: "brown",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "famale",
    age: 24,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Rosshsdjh Vazquez",
    email: "ross1988@xinware.com",
    eyeColor: "grey",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 45,
  },]

//   // Отримати масив імен користувачів за статтю (поле gender)
// const gender = "male";

//   const usersGender = users.reduce((acc, user) => {
//     if (user.gender === gender) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, [])

//   console.log(usersGender);
// ====================================================================================================

// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

// const eyesByUsers = (users, color) => 
//     users.filter(user => user.eyeColor === color)

// console.log(eyesByUsers(users, "green"))
// console.log(eyesByUsers(users, "blue"))
// console.log(eyesByUsers(users, "grey"))
// console.log(eyesByUsers(users, "brown"))
// ============================================================================================================
// Отримати масив тільки неактивних користувачів (поле є активним).

// const notActiveUsers = users.filter( user => user.isActive === false);
    
// console.log(notActiveUsers);

// ======================================================================================
// Отримати користувача (не масив) по email (поле email, він унікальний).

// const getUsersNameByEmail  =
//      users.find(user => user.email === "ross@xinware.com");

// console.log(getUsersNameByEmail);
// =====================================================================================
// Отримати масив користувачів віком від min до max
// const minAge = 20;
// const maxAge = 30;
// const getUsersByAge = users.filter(user => 
//     user.age >= minAge && user.age <= maxAge);


// console.log(getUsersWithAge);
// ======================================================================================
// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users));

// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));