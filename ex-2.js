function countVowels(words) {
let vowels =""
for (let a of words){
  let lowerA = a.toLowerCase();
  if (lowerA ==="a"|| lowerA==="e" || lowerA==="i" || lowerA==="o" || lowerA==="u"){
    vowels += a;
  }
}
return vowels.length;
}

console.log(countVowels("Hello World")); 
console.log(countVowels("TechUp"))
