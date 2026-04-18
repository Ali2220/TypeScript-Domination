"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Step 1: Type Annotations – Basic Variables
let productID = 101;
let productName = "laptop";
let price = 120000;
let inStock = true;
let laptop = {
    id: 1,
    name: "DELL Precision",
    price: 125000,
    category: "Electronics",
    inStock: true,
};
let myOrderStatus = "pending";
myOrderStatus = "shipped";
let admin1 = {
    name: "Ali",
    email: "alisarwar0277@gmail.com",
    role: "admin",
    permissions: ["create_product", "delete_product", "view_orders"],
};
let customer1 = {
    name: "Sara",
    email: "sara@gmail.com",
    address: "Gulshan",
};
let sampleProduct = {
    id: 2,
    name: "Mouse",
    price: 200,
    category: "Electronics",
    inStock: false,
};
let order = {
    orderId: 1001,
    status: "pending",
    customer: customer1,
    items: [
        { ...sampleProduct, quantity: 2 },
        { ...laptop, quantity: 1 },
    ],
};
// Step 6: Function with Type Annotations
function calculateTotal(order) {
    let total = 0;
    for (const item of order.items) {
        total += item.price * item.quantity;
    }
    return total;
}
let totalAmount = calculateTotal(order);
console.log(`Total Amount is ${totalAmount}`);
//# sourceMappingURL=store.js.map