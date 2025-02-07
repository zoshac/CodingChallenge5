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

// Order Details completed 


// Task 3 Whats in my cart

let cartItems = ["shirt", "pants", "cap"];

// Add an Item
cartItems.push ("shorts");
console.log(cartItems);

// Remove last item 
cartItems.pop();
console.log(cartItems);

// Add Item to the beginning 
cartItems.unshift("watch");
console.log(cartItems);

// Remove first item
cartItems.shift();
console.log(cartItems);

// Completed items in Shopping cart
console.log("Completed Shopping Cart items", cartItems); 


// Task 4 Adjusting Prices 

let prices = [1000, 750, 800];

function applyDiscount(discount = 0.10, pricesArray){
    return pricesArray.map(price => price * (1 - discount));
}

let discountedPrices = applyDiscount(0.1, prices);
console.log(discountedPrices);

// You got a discount 