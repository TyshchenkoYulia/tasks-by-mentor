// 1. Дан масив [5, 12, 8, 20]. Повернути тільки числа > 10.

// const array = [5, 12, 8, 20];
// console.log(array);
// const newArray = array.filter(n => n >10);
// console.log(newArray);

// 2. Дан масив [1, 2, 3, 4]. Знайти суму всіх елементів.

// const array = [5, 12, 8, 20];
// const sum = array.reduce((a, b) => a + b);
// console.log(sum);

// 3. [4, 7, 1] – знайти максимальне.

// const array = [4, 7, 1, 21];
// const max = Math.max(...array);
// console.log(max);

//4.  [4, 7, 1] – знайти мінімальне.

// const array = [4, 7, 1, 21];
// const min = Math.min(...array);
// console.log(min);

// 5. ['a','b','c'] → ['A','B','C']

// const array = ['a', 'b', 'c'];
// const newArray = array.map(n => n.toUpperCase(array));
// console.log(newArray);

// 6. [1, 2, 2, 3] → без повторів

// const array = [1, 2, 2, 3, 4, 5, 5];
// const newArray = array.filter((v, i, a) => a.indexOf(v) === i);
// console.log(newArray);

// 7. Перевірити, чи всі елементи >0
// Умова: [1,2,3]

// const array = [1, 2, 3];
// const newArray = array.every(n => n > 0);
// console.log(newArray);

// 8. Перевірити, чи є хоча б один >5
// Умова: [1,2,6]

// const array = [1, 2, 6];
// const newArray = array.some(n => n > 5);
// console.log(newArray);

// 9. Порахувати частоту елементів
// Умова: ["apple","banana","apple"] → {apple:2, banana:1}

// const array = ['apple', 'banana', 'apple'];
// const newArray = array.reduce((acc, v) => ((acc[v] = (acc[v] || 0) + 1), acc), {});
// console.log(newArray);

// 10. Відсортувати числа за зростанням
// Умова: [3,1,2]

// const array = [3, 1, 4, 2];
// const newArray = array.sort((a, b) => a - b);
// console.log(newArray);

// 11. Відсортувати об’єкти за полем
// Умова: [{age:20},{age:15}] → за age

// const array = [{ age: 20 }, { age: 15 }];
// const newArray = array.sort((a, b) => a.age - b.age);
// console.log(newArray);

// 12. Знайти об’єкт за id
// Умова: [{id:1},{id:2}], знайти id=2

// const array = [{ id: 1 }, { id: 2 }];
// const newArray = array.find(n => n.id = 2);
// console.log(newArray);

// 13. З масиву об’єктів у масив імен
// Умова: [{name:"A"},{name:"B"}] → ["A","B"]

// const array = [{ name: 'A' }, { name: 'B' }];
// const newArray = array.map(n => n.name);
// console.log(newArray);

// 14. Перетворити масив об’єктів у об’єкт
// Умова: [{id:1,name:"A"},{id:2,name:"B"}] → {1:"A",2:"B"}

// const array = [
//   { id: 1, name: 'A' },
//   { id: 2, name: 'B' },
// ];
// const newArray = array.reduce((prev, cur) => ((prev[cur.id] = cur.name), prev), {});
// console.log(newArray);

// 15. Відфільтрувати об’єкти за умовою
// Умова: [{age:20},{age:15}], лишити age>=18

// const array = [{ age: 20 }, { age: 15 }, { age: 25 }];
// const newArray = array.filter(n => n.age >= 18);
// console.log(newArray);

// 16. Перевірити, чи всі об’єкти мають age>18
// Умова: [{age:20},{age:22}]

// const array = [{ age: 20 }, { age: 15 }];
// const newArray = array.every(n => n.age > 18);
// console.log(newArray);

// 17. Перевірити, чи є хоча б один об’єкт age<18
// Умова: [{age:20},{age:15}]

// const array = [{ age: 20 }, { age: 15 }];
// const newArray = array.some(n => n.age < 18);
// console.log(newArray);

// 18. Створити масив id з об’єктів
// Умова: [{id:1},{id:2}] → [1,2]

// const array = [{ id: 1 }, { id: 2 }];
// const newArray = array.map(n => n.id);
// console.log(newArray);

// 19. Об’єднати два масиви об’єктів
// Умова: [ {id:1} ] + [ {id:2} ] → один масив

// const array1 = [{ id: 1 }];
// const array2 = [{ id: 2 }];
// const newArray1 = array1.concat(array2);
// const newArray2 = [...array1, ...array2];
// console.log(newArray1);
// console.log(newArray2);

// 20. Знайти суму певного поля
// Умова: [{val:2},{val:3}] → 5

// const array = [{ val: 2 }, { val: 3 }];
// const newArray = array.reduce((a, b) => a.val + b.val);
// console.log(newArray);
// -----------------------------------------------------------------------------------------------

// 1. Об’єднати масив рядків у речення
// const arr = ['Hello', 'world', '!'];
// const newArray = arr.join('');
// console.log(newArray);

// 2. Порахувати кількість голосних у рядку
// const str = 'React is awesome';
// const count = str.match(/[aeiou]/gi)?.length || 0;
// console.log(count);

// 3. Замінити всі пробіли на дефіси
// const str = 'I love JavaScript';
// const newArray = str.replace(/ /g, '-');
// console.log(newArray);

// 4. Зробити першу літеру кожного слова великою
// const str = 'hello world from js';
// const newArray = str
//   .split(' ')
//   .map(word => word[0].toUpperCase() + word.slice(1))
//   .join(' ');
// console.log(newArray);

// 5. Знайти найдовше слово у рядку
// const str = "JavaScript is really powerful";

// 6. Flatten вкладеного масиву (1 рівень)
// const arr = [1, [2, 3], [4, 5]];

// 7. Flatten вкладеного масиву (глибоке)
// const arr = [1, [2, [3, [4]]]];

// 8. Перетворити масив об’єктів у об’єкт по ключу
// const users = [
//   { id: 1, name: "Alice"},
//   { id: 2, name: "Bob"}
// ];

// 9. Вибрати унікальні значення з масиву
// const arr = [1,2,2,3,3,4];

// 10. Згрупувати об’єкти за властивістю
// const people = [
//   {name: "Alice", group: "A"},
//   {name: "Bob", group: "B"},
//   {name: "Charlie", group: "A"}
// ];
