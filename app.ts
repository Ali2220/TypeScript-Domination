// Primitive Types

// let a = 12
// let b = false
// let c = "Hii"
// let d = undefined

// Reference Type

// let arr= [1, 2, 3, 4]
// let obj = {}

// Array in TS

// Example 1:
// let ages: number[] = [1, 2, 3]
// console.log(ages);

// Example 2:
// let names: string[] = ["Ali", "Huzaifa"]
// console.log(names);

// Example 3: using 2 types (number and string in array)
// let mixed: (number | string)[] = [12, 13, "happy"]

// Tuples in TS

// Example 1:
// let tup: [string, number] = ["hello", 23]

// Example 2:
// let user: [string, number, boolean] = ["Ali", 23, true]
// console.log(user);

// ENUM in TS

// Example 1:
// enum Status{
//     PENDING = "pending",
//     APPROVED = "approved",
//     REJECTED = "rejected",
// }
// console.log(Status.APPROVED);

// Example 2:
// enum Status{
//     Pending,  // 0
//     Approved, // 1
//     Rejected  // 2
// }

// let myStatus: Status = Status.Approved
// console.log(myStatus);  // 1 (by default number assign hota hai)

// Example 3:
// enum OrderStatus {
//     Pending = "PENDING",
//     Shipped = "SHIPPED",
//     Delivered = "DELIVERED",
//     Cancelled = "Cancelled",
// }

// let myStatus: OrderStatus = OrderStatus.Shipped
// console.log(myStatus);

// Any, Unknown, Void, Never, Null, Undefined in TS

// 1. Any -> koi bhi type allowed, no checking (dangerous)

// let a;
// a = 12              //✅ allowed
// a = "harsh"       // ✅ allowed
// a.toUpperCase()  // ✅ allowed (compiler kuch check nhi krega )

// 2. Unknown -> koi operation allowed nahi jab tak type check na kar lo (safe)

// let a: unknown;
// a = 2
// a = 'hamza'

// a.toUpperCase() // ❌ Error: unknown pe direct method nahi chala sakte. Pehle type check krna pde ga.
// if(typeof a === "string"){
// console.log(a.toUpperCase()); ✅ ab allowed hai
// }

// 3. Void -> function kuch return nhi krega

// function abcd(): void{
//     console.log('Hello');
//  kuch return nhi ho rha.
// }

// 4. Null

// Example 1:
// let a: null;
// a = null // ✅ Allowed
// a = 12  // ❌ Not allowed

// Example 2:
// let name: string | null;
// name = "Huzaifa"
// name = null
// console.log(name);

// 5. Undefined
// let a: undefined
// console.log(a);

// 6. Never
// Never wala function kuch return nahi karta, kabhi nahi.

// function throwError(message: string): never {
//   throw new Error(message); // function yahi ruk gaya
// }

// throwError("Error")

// function infiniteLoop(): never {
//   while (true) {
//     console.log("Running forever");
//   }
// }

// infiniteLoop()

// Interface in TS:

// Example 1:
// interface User {
//   name: string;
//   email: string;
//   password: string;
//   gender?: string
// }

// function addUser(obj: User) {
//   console.log(obj.name);
//   console.log(obj.email);
//   console.log(obj.password);
//   console.log(obj.gender);
// }

// addUser({ name: "Ali", email: "ali@gmail.com", password: "123"});


// Example 2:
// interface User{
//     name: string,
//     age: number,
//     email?: string
// }

// let ali: User = {
//     name: 'Ali',
//     age: 24,
//     email: 'ali@gmail.com'
// }

// let sara: User = {
//     name: 'sara',
//     age: 22
// }

// console.log(ali);
// console.log(sara);

// Extending Interfaces

// Example 1:
// interface User{
//     name: string
// }

// interface Admin extends User{
//     admin: boolean
// }

// const obj1: Admin = {
//     name: 'umer',
//     admin: false
// }

// const obj2 : Admin = {
//     name: 'ali',
//     admin: true
// }

// console.log(obj1);
// console.log(obj2);


// Type Alias in TS
// Example 1:
// type UserId = string | number

// let id1: UserId = 'abc123'
// let id2: UserId = 99

// Example 2:

// type param = string

// function abcd(obj: param){

// }

// abcd('Ok jeee')


// Example 3: Tuple type alias
// type Point = [number, number]
// let origin: Point = [10, 20]
// console.log(origin);


// Intersection Types
// Example 1:

// type Person = {
//     name: string,
//     age: number
// }

// type Employee = {
//     employeeId: number
//     depart: string
// }

// type EmployeeDetails = Person & Employee

// let ali: EmployeeDetails = {
//     name: 'Ali',
//     age: 24,
//     employeeId: 101,
//     depart: 'Development'
// }

// console.log(ali);


// Introduction to Classes and Objects in TS

// Example 1:
// class Device {
//     name = "dell";
//     price = 120000
//     category = "laptops"
// }

// let d1 = new Device()
// let d2 = new Device()
// console.log(d1);
// console.log(d2);


// Constructor
// Example 1:
// class HumanMaker {
//     age = 0

//     constructor(public name: string, public isHandsome: boolean){

//     }
// }

// let h1 = new HumanMaker("Ali", true)
// let h2 = new HumanMaker("Ahsan", false)
// console.log(h1);
// console.log(h2);


// Example 2:
// class Student {
//     name: string;
//     age: number

//     constructor(studentName: string, studentAge: number){
//         this.name = studentName
//         this.age = studentAge
//     }

//     introduce() {
//         console.log(`My name is ${this.name}, my age is ${this.age}`);
//     }
// }

// let s1 = new Student('Sara', 18)
// s1.introduce()


// Example 3: In this example we cannot access email property outside class because it is a private property, and we cannot assign any new value to id because it is readonly.
// class User {
//     constructor(public name: string, private email: string, readonly id: number){

//     }

//     getInfo(){
//         return `Name: ${this.name}, Email: ${this.email} - ID: ${this.id}`
//     }
// }

// let user1 = new User('Sarwar', 'ali@gmail.com', 21054)
// console.log(user1.getInfo());


// Example 4: Real Life Example (ATM Card)

// class ATMCARD {
//     cardNumber: string;
//     private pin: string;
//     balance: number

//     constructor(cardNumber: string, pin: string, initialBalance: number) {
//         this.cardNumber = cardNumber
//         this.pin = pin
//         this.balance = initialBalance
//     }

//     withdraw(amount: number, enteredPin: string): boolean {
//         if (enteredPin !== this.pin) {
//             console.log('Wrong Pin');
//             return false
//         }
//         if (amount > this.balance) {
//             console.log('Insufficient Balance');
//             return false
//         }
//         this.balance -= amount
//         console.log(`Withdrawn ${amount}. Remaining: ${this.balance}`);
//         return true
//     }
// }

// let myCard = new ATMCARD("1234", "2002", 10000)
// myCard.withdraw(2000, "2002")


// Access Modifiers: Public , Private, Protect

// Public
// class Person {
//     public name: string
//     age: number

//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }

//     public introduce() {
//         console.log(`Name: ${this.name}, Age: ${this.age} `);

//     }
// }

// let p1 = new Person('Umer', 25)
// p1.introduce()


// Private
// class BankAccount {
//     public owner: string
//     private balance: number  // sirf class ke andar access

//     constructor(owner: string, initialBalance: number){
//         this.owner = owner
//         this.balance = initialBalance
//     }

//     deposit(amount: number){
//         this.balance += amount
//     }

//     getBalance(){
//         return this.balance
//     }
// }

// let b1 = new BankAccount('Shehryar', 20000)
// b1.deposit(10000)
// console.log(b1.getBalance());


// Protected
// class Animal {
//     public name: string
//     protected age: number  // child classes ko milega, bahar se nahi
//     private secret: string  // sirf Animal class ko

//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age
//         this.secret = "hidden"
//     }
// }

// class Dog extends Animal {
//     private breed: string

//     constructor(name: string, age: number, breed: string){
//         super(name, age)
//         this.breed = breed
//     }

//     showInfo(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }

// let d1 = new Dog('PitBull', 3, 'german')
// d1.showInfo()

