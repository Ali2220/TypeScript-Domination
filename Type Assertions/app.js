"use strict";
// Type Assertions:
// Example: 1
// let userInput: unknown = "Hello TypeScript";
// let length = userInput.length; // ❌ Error: unknown type
Object.defineProperty(exports, "__esModule", { value: true });
// let length = (userInput as string).length; // ✅ Assertion
// console.log(length); // 17
// Type Casting:
// let strNum: string = "123"
// let num = Number(strNum)
// console.log(typeof num);
// let num1 = +strNum
// console.log(typeof num1);
// Type Guards (typeof, instanceof)
// Example 1:
// function printLength(value: string | number): void {
//   if (typeof value === "string") {
//     console.log(value.length);
//   } else {
//     console.log(value.toFixed(2));
//   }
// }
// printLength("Ali");
// printLength(21054.123456);
// Example 2:
class Car {
    drive() {
        console.log("Driving a Car");
    }
}
class Bike {
    ride() {
        console.log("Riding a Bike");
    }
}
function useVehicle(vehicle) {
    if (vehicle instanceof Car) {
        vehicle.drive();
    }
    else {
        vehicle.ride();
    }
}
const car = new Car();
const bike = new Bike();
useVehicle(car);
useVehicle(bike);
//# sourceMappingURL=app.js.map