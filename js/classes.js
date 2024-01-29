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
// Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice
//  зі значенням число 50000 - максимально допустима ціна автомобіля.

// Додай сеттеру price перевірку значення параметра newPrice, що передається. 
// Якщо воно більше за maxPrice, сеттер нічого не робить,
//  а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, 
// щоб показати, як будуть використовуватися геттери і сеттери price.

// class Car {
//     #price;
//   static maxPrice = 50000;
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       if ( newPrice <= Car.maxPrice){
//        this.#price = newPrice;
//       }
      
      
//     }
//   }
  
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000
// ============================================================================
// Додай класу Car публічний статичний метод checkPrice(price),
//  що приймає ціну автомобіля.
//  Метод повинен порівняти значення параметра price і 
//  приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, 
// метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок 
// "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і 
// виклики методів, щоб показати, 
// як буде використовуватися метод checkPrice(price).

// class Car {
//     static #maxPrice = 50000;

//     constructor({ price }) {
//       this.price = price;
//     }

//     static checkPrice(price) {
//         if (price >= this.#maxPrice){
//             return "Error! Price exceeds the maximum";
//         } else {
//             return "Success! Price is within acceptable limits";
//         }
//     }

    
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
//   console.log(Car.checkPrice(64000))
// ============================================================================

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів 
// у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість role (рівень доступу), 
// значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     static role = {BASIC: "basic", SUPERUSER: "superuser"}
//   }

//   console.log(Admin.role.BASIC);
//   console.log(User);
//   console.log(Admin);
//   console.log(Admin.email);
// ============================================================================
// Додай класу Admin метод constructor, який приймає один параметр -
//  об'єкт налаштувань з двома властивостями email і access.
//  Додай класу Admin публічну властивість access, 
// значення якої буде передаватися під час виклику конструктора.

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     constructor({email, access}){
//         super(email);
//       this.access = access;
//     }
    
//     static role = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     access: Admin.role.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.access); // "superuser"
// ================================================================================
// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку
//  поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список.
//  Метод повинен додавати значення параметра email в масив, 
//  що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. 
// Метод повинен перевіряти наявність значення параметра email в масиві, 
// що зберігається у властивості blacklistedEmails, і повертати true або false.

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//    blacklistedEmails = [];
    
//     static role = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor({ email, access }) {
//       super(email);
//       this.access = access;
//     }
  
//   blacklist(email) {
//     return this.blacklistedEmails.push(email);
//   }
//     isBlacklisted(email) {
//       return this.blacklistedEmails.includes(email);
//     }
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     access: Admin.role.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.access); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true
//   ==================================================================