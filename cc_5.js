// Task 1 Creating the Customer profile 
const customer = {
    name: "Max Verstappen",
    age: 22,
    email: "maxrocks@gmail.com"
};

console.log (`Name: ${customer.name}`);
console.log (`age: ${customer.age}`);
console.log (`email: ${customer.email}`);

// Customer Profile Created  

//Task 2 Store Order Details 
const orders = {
    orderID: 876,
    totalAmount: 300,
    status: "Delivered",

displayOrder: function() {
    console.log(`OrderID: ${this.orderID}`);
    console.log(`totalAmount: $${this.totalAmount}`);
    console.log(`status: ${this.status}`);
}
}
orders.displayOrder();
