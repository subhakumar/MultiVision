const reserveString = (input:string):string => {
   const result = input.split("").reverse().join("")
   return result
}

const input = "madams"
const output = reserveString(input)

const result = (input === output) ? "Yes, it's palindrome" : "No, it's not palindrome";

console.log(result)
