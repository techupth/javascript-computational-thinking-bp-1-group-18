let numbers = [10, 20, 30];
let anotherNumbers = [2, 4, 6];

function addNumber(numbers, amount) {
  let newNumbers =[]
  for (let i =0; i < numbers.length; i++){

  newNumbers.push(numbers[i] + amount);

}
return newNumbers;
  // Start coding here
}

console.log(addNumber(numbers, 10))

console.log(addNumber(anotherNumbers, 2))
addNumber(numbers, 10); // Output: [20, 30, 40]
addNumber(anotherNumbers, 2); // Output: [4, 6, 8]
