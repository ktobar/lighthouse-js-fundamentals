function howManyHundreds(num){

  let container = 0
  let bottle = num
  if(num >= 100){
    for (let x = 1; bottle >= 100 ; x++){
      bottle -= 100
      container = x
    }
  }
  return container
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);