function getPeak(arrayList:number[]):number {

  let peakValue = arrayList[0]
  let midElement = Math.round(arrayList.length/2)
  let foundPeak = false;

  //Check the right side first
  for (let i=midElement; i  < arrayList.length; ++i) {
    console.log(arrayList[i])
    if (isPeak(arrayList[i], arrayList[i-1], arrayList[i+1])) {
      foundPeak = true
      peakValue = arrayList[i];
      break;
    }
  }

  if (!foundPeak) {
    console.log("Now check the right side")
    for (let j=midElement; j >= 0; --j) {
      console.log(arrayList[j])
      if (isPeak(arrayList[j], arrayList[j-1], arrayList[j+1])) {
        foundPeak = true
        peakValue = arrayList[j];
        break;
      }   
    }

  }


  return peakValue
}

function isPeak(currValue:number, rightValue:number,leftValue:number):boolean {
  return (currValue > leftValue && currValue > rightValue)
}



const result = getPeak([5,80,15,25,30,45,50,55,60])
console.log("Here is the result")
console.log(result)