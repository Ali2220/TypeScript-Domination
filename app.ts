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

// Tupes in TS

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