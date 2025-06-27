//* Pure function

// const add = (a, b) => a + b;

// console.log(add(0, 1));
// console.log(add(1, 1));
// console.log(add(2, 1));

//* Impure function

// let total = 0;

// const addToTotal = (amount) => (total = total = amount);
// console.log(addToTotal(4));

// const updateDate = () => {
//   new Date();
// };

// const ramdomNumber = (amount) => {
//   return amount + Math.random();
// };

// console.log(ramdomNumber(3));
// console.log(ramdomNumber(3));
// console.log(ramdomNumber(3));
// console.log(ramdomNumber(3));

// Understanding Mutation and ways to avoid it.

// import { produce } from "immer";

// const employee = {
//   name: "Mir",
//   address: { country: "Bangladesh", city: "Dhaka" },
// };

// const employee2 = produce(employee, (draft) => {
//   draft.name = "Mezba";
//   draft.address.city = "Chittagong";
// });

// console.log(employee);
// console.log(employee2);

// const employee2 = {
//   ...employee,
//   name: "Mir",
//   address: { ...employee.address, city: "Chittagong" },
// };
// employee2.address.city = "Chittagong";
// employee2.name = "Mezba";
// console.log(employee == employee2);
// console.log(employee);
// console.log(employee2);

//* Currying / Function Curry
//* Normal
// const add = (a, b) => a + b;

//*Curried
// const add = (a) => (b) => a + b;

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(add(3));

// const totalPrice = (amount, discount) => amount - amount * discount;

// console.log(totalPrice(100, 0.3));
// console.log(totalPrice(59, 0.3));

const totalPrice = (discount) => (amount) => amount - amount * discount;

const withDiscount = totalPrice(0.3);
console.log(withDiscount(100));
console.log(withDiscount(200));
console.log(withDiscount(250));
