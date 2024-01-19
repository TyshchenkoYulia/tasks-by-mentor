// class Car {
//     constructor(brand, model, price){
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//   }
//   const cars = new Car("Audi", "Q3", 36000);
//   console.log(cars)

//   ==================================================================
// class Car {
//     constructor(params) {
//       this.brand = params.brand;
//       this.model = params.model;
//       this.price = params.price;
//     }
//   }
//   const cars = new Car({ brand: "Audi", model: "Q3", price: 36000 });
//   console.log(cars)
// =============================================================================
// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, 
// який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта,
//  який буде його викликати на значення параметра newPrice.
// class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     getPrice(){
//       return this.price;
//     }
//     changePrice(newPrice) {
//       this.price = newPrice
//     }
//   }
  
  
//   console.log(Car.getPrice)
//     Car.getPrice("12300")
//   console.log(Car.changePrice())
// =========================================================================

// Виконай рефакторинг класу Car таким чином, 
// щоб властивість brand була приватною, 
// і додай два методи для публічного інтерфейсу,
//  для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості 
// brand на newBrand.

// class Car {
//     #brand;
    
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
  
//     getBrand() {
//       return this.#brand;
//     }
  
//     changeBrand(newBrand) {
//       this.#brand = newBrand;
//     }
//   }

//   console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
//  ===========================================================================
// Виконай рефакторинг класу Car. Додатково до приватної властивості #brand 
// зроби приватними властивості model і price. 
// Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи 
// на геттери та сеттери brand, model і price,
//  для взаємодії з приватними властивостями.

// class Car {
//     #brand;
//   #model;
//     #price;
    
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.#model = model;
//       this.#price = price;
//     }
  
//     get brand() {
//       return this.#brand;
//     }
  
//     set brand(newBrand) {
//       this.#brand = newBrand;
//     }
  
//     get model() {
//       return this.#model;
//     }
  
//     set model(newModel) {
//       this.#model = newModel;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
//   }
//   ==========================================================================

