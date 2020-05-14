//structure for creating an object, and this object will have these properties and values
interface Mountain {
  name: string;
  height: number;
}
//mountains is a variable we named = to an array of objects that meet the requirements of the Mountain interface
let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];
// this is declaring a function with a parameter of array of mountains
//                      type of mountain is     Mountain array      saying it will be a string
//                                      v          V                 v
const findNameOfTallestMountain = (mountainArray: Mountain[]): string => {
  // says the tallest mountain will be the first one in the array [0] (putting the mountains in a stack so the first one is the tallest)
  //  check to see if any other mountain is taller by using a loop and a conditional statement
  //giving the variable name tallestMountain, we make that name, and then say it will be the first in the array when the function runs and says its the tallest

  let tallestMountain = mountains[0];
  mountainArray.forEach((mountain) => {
    // saying mountain.height means we are accessing the height id in mountain
    if (mountain.height > tallestMountain.height) {
      tallestMountain = mountain;
    }
  });
  //   this will return the tallest
  return tallestMountain.name;
};
//             function                  argument
let tallestMountain = console.log(findNameOfTallestMountain(mountains));
//
interface Product {
  name: string;
  price: number;
}
//products is an array of objects where each object meets the contract for a Product
let products: Product[] = [
  { name: "basic", price: 1 },
  { name: "rich", price: 100 },
  { name: "trump steak", price: 100 },
];

// How to find an average
//creates a function             it needs an array to complete task   ---  the array needs to be an array of objects where each object meets the contract defined by the Product interface  ---  lastly the function returns a number
const calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  // before loop
  let totalPrice = 0;
  // loop through arrayOfProducts and refer to each object as a product
  arrayOfProducts.forEach((product) => {
    totalPrice += product.price;
  });
  //  total price of all products in array / the 3 products ( array of the 3 products)

  return totalPrice / arrayOfProducts.length;
};
console.log(calcAverageProductPrice(products));
console.log(products.length);
//
interface InventoryItem {
  product: Product;
  quantity: number;
}
//
let inventory: InventoryItem[] = [
  //each product: has an {object} so each product has a sub set of name and price, and then quantity after, so it matches the interface of calling just product and quantity
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "led", price: 1.0 }, quantity: 20 },
];
//                        we make this name       array of objects that meets the contract of InventoryItem
// its not data its a reference                             v                   v
let calcInventoryValue = (inventoryItems: InventoryItem[]): number => {
  // before the loop set the value to 0 (for each loop are specific to arrays)
  let value = 0;
  // start a for each loop with the name you want to loop over
  //                  we chose this name to item - item looks at the items on 65, 66, 67
  //                         v
  inventoryItems.forEach((item) => {
    //  0
    //  v
    value += item.product.price * item.quantity;
  });
  return value;
};

console.log(calcInventoryValue(inventory));
