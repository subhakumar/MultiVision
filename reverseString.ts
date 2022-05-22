function reverse(input:string):string {
  const arr = input.split("")
  const revArray = arr.reverse()
  const revString = revArray.join("")
  return revString
}


function reverseString(str:string):string {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));

console.log("Here is the result")
console.log(reverse("987654321"))
