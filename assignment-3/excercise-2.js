// Churun Ain Azkal Azkiya (RCJ04S018)

function threeStepsAB(text) {
  for (let i = 0; i < text.length - 4; i++) {
    if (text[i] === "a" && text[i + 4] === "b") {
      return true;
    } else if (text[i] === "b" && text[i + 4] === "a") {
      return true;
    }
  }
  return false;
}

console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("barbarian")); // true
