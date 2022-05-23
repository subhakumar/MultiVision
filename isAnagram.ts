const isAnagram = (string1:string, string2:string):boolean => {
  const result1 = string1.split("").sort().join("")
  const result2 = string2.split("").sort().join("")
  // return true
  return ((result1 === result2) ? true : false)
}
console.log(isAnagram("listen","silent"))
console.log(isAnagram("listens","silent"))
