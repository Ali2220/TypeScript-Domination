// Step 1: Type Annotations – Basic Variables
let productID: number = 101;
let productName: string = "laptop";
let price: number = 120000;
let inStock: boolean = true;

// Step 2: Interface – Product Shape
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

let laptop: Product = {
  id: 1,
  name: "DELL Precision",
  price: 125000,
  category: "Electronics",
  inStock: true,
};

// Step 3: Type Alias – Union for Status
type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

let myOrderStatus: OrderStatus = "pending";
myOrderStatus = "shipped";

// Step 4: Extending Interfaces – User & Admin
interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  role: string;
  permissions: string[];
}

interface RegularUser extends User {
  address: string;
}

let admin1: Admin = {
  name: "Ali",
  email: "alisarwar0277@gmail.com",
  role: "admin",
  permissions: ["create_product", "delete_product", "view_orders"],
};

let customer1: RegularUser = {
  name: "Sara",
  email: "sara@gmail.com",
  address: "Gulshan",
};

// Step 5: Intersection Types – Order with Product & User
type OrderItem = Product & { quantity: number };

type Order = { orderId: number; status: OrderStatus } & {
  customer: RegularUser;
  items: OrderItem[];
};

let sampleProduct: Product = {
  id: 2,
  name: "Mouse",
  price: 200,
  category: "Electronics",
  inStock: false,
};

let order: Order = {
  orderId: 1001,
  status: "pending",
  customer: customer1,
  items: [
    { ...sampleProduct, quantity: 2 },
    { ...laptop, quantity: 1 },
  ],
};

// Step 6: Function with Type Annotations
function calculateTotal(order: Order): number {
  let total = 0;
  for (const item of order.items) {
    total += item.price * item.quantity;
  }

  return total;
}

let totalAmount = calculateTotal(order);
console.log(`Total Amount is ${totalAmount}`);
