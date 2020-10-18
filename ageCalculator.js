function ageCalculator(name, yearOfBirth, currentYear){

  let ageResult = currentYear - yearOfBirth
  let nameResult = name 
  
  return nameResult + " is " + ageResult + " years old."   
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));