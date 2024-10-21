// Churun Ain Azkal Azkiya (RCJ04S018)

function isArithmeticProgession(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] - numbers[i - 1] !== numbers[1] - numbers[0]) {
      return false;
    }
  }
  return true;
}

console.log(isArithmeticProgession([2, 4, 6, 8, 10])); // true
console.log(isArithmeticProgession([2, 4, 6, 8, 12])); // true
