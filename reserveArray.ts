function reverse(inputArray:number[]):number[] {
  const result:number[] = []
  const length = inputArray.length-1
  for (let i = length; i >= 0; --i) {
    result.push(inputArray[i])
  }
  return result
}

const test1 = reverse([10, 30, 5, 20, 15, 70])
console.log("Test Case 1 Min Max Values...")
console.log(test1)


const test2 = reverse([5, 30, 5, 20, 15, 2])
console.log("Test Case 2 Min Max Values...")
console.log(test2)


const test3 = reverse([-5, -30, 5, 20, 15, 2])
console.log("Test Case 3 Min Max Values...")
console.log(test3)
