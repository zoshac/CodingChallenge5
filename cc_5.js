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

// Task 5 Product Availability 

const inventory = [45, 0, 22, 56, 0];

// Checking Availability 
const inStock = (quantity) => quantity > 0;

const productsAvailable = inventory.filter(inStock);

console.log(productsAvailable);


// Task 6 Company Revenue 

const sales = [900, 450, 790, 525];

// Total sales Calculation 

function sumSales(accumulator, currentValue){
    return accumulator + currentValue;
}
// Total revenue calculation 

const totalRevenue = sales.reduce(sumSales, 0);

console.log(`Total Revenue: $${totalRevenue}`);

// Task 7 Finding Customers 

const customers = ["Jen", "Nick", "Jay", "Yan"]; 

// Search customer
function findCustomer(name){
    return customers.find(customer => customer === name);
}
console.log(findCustomer("Nick")); 

// Task 8 Calculating Tax 

function calculateSalesTax (price, taxRate){
    return price * taxRate
}

let price = 900;
let taxRate = 0.07;

let taxAmount = calculateSalesTax(price, taxRate);
console.log(`Tax Amount: $${taxAmount}`);

// Task 9 Heres a Discount 

function applyDiscount(discount = 0.07, ...prices) {
    return prices.map(price => price * (1 - discount));
}

let priceDiscount = applyDiscount(0.1, 675, 420, 830);
console.log(priceDiscount);


