const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
  let mostExpensiveProduct;
  for (let a=0; a < products.length; a++){
    if(a ===0 || products[a].price > mostExpensiveProduct.price ){
      mostExpensiveProduct = products[a]  
    }
  }
  return mostExpensiveProduct
}


console.log(getMostExpensiveProduct(products)); 
