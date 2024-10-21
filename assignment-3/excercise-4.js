// Churun Ain Azkal Azkiya (RCJ04S018)

function arrSum(arr) {
  let maxSum = arr[0];
  let startIndex = 0; 
  let endIndex = 0; 

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;

    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j]; 
      if (currentSum > maxSum) {
        maxSum = currentSum; 
        startIndex = i; 
        endIndex = j; 
      }
    }
  }

  const maxSubArray = arr.slice(startIndex, endIndex + 1);

  return [maxSubArray, maxSum];
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));
