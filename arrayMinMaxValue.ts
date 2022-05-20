type TReturnValue = {
  minValue:number;
  maxValue:number;
}


function getMinMaxValues(inputArray:number[]):TReturnValue {
  
  const length = inputArray.length
  const result:TReturnValue = {
    minValue:inputArray[0],
    maxValue:inputArray[0]
  } 
  for (let i =0; i < length; i++ ) {

    const currValue = inputArray[i]
    const nextValue = (i < length-1) ?  inputArray[i+1] :  inputArray[i]
    // console.log("Current Value")
    // console.log(currValue)
    // console.log("Next Value")
    // console.log(nextValue)  
     
    if (currValue < nextValue && result.minValue > currValue) {
      // Min 
      result.minValue = currValue
    } else {
      // Max
      if (result.maxValue < currValue) {
        result.maxValue = currValue
      }
    }

  }
  return result;
}

const test1 = getMinMaxValues([10, 30, 5, 20, 15, 70])
console.log("Test Case 1 Min Max Values...")
console.log(test1)


const test2 = getMinMaxValues([5, 30, 5, 20, 15, 2])
console.log("Test Case 2 Min Max Values...")
console.log(test2)


const test3 = getMinMaxValues([-5, -30, 5, 20, 15, 2])
console.log("Test Case 3 Min Max Values...")
console.log(test3)
