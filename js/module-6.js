'use strict';


// Виконай рефакторинг методів об'єкта pizzaPalace, 
// розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.


// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//   };

//   console.log(pizzaPalace.order("Big Mike"));
//   console.log(pizzaPalace.order("Four meats"));
//   ===========================================================================================
// function showThis() {
//     console.log("this in showThis: ", this);
//   }
  
//   const user = {
//     username: "Poly",
//   };
  
//   user.showContext = showThis;
  
//   // Викликаємо в контексті об'єкта
//   user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}
  
//   // Викликаємо в глобальному контексті
//   showThis(); // "this in showThis: undefined"
// ========================================================================================================
