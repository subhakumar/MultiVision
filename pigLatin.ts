// #### Intro

// To solve this challenge, feel free to use any and all resources available to you. You can also choose to solve the problem in whichever language you're most comfortable with. Once you start the exercise, you'll have two hours to complete and submit your solution. We have provided a set of test cases to help you verify your solution, but do take the time to consider edge cases that may not be covered by the test cases you have been provided.

// #### Challenge - Pig Latin

// Pig Latin is a farcical "language" used to entertain children, but also to teach them some valuable language concepts along the way.  Translating English to Pig Latin is simple:

// 1) Take the first consonant (or cluster of consonants) of a word, move it to the end of the word, and add a suffix of "ay"
// 2) If a word begins with a vowel, just add "way" at the end
// 3) For the sake of readability, separate the Pig Latin-ized parts of the word with a dash `-`

// Your challenge is to define a function that takes a Phrase and translates it to Pig Latin.  The Phrase could be as short as a single word, or as long as multiple sentences or paragraphs.  Whitespace, capitalization, and punctuation should be honored and maintained in your final answer.

// #### Examples

// 1) "pig" => "ig-pay"
// 2) "pig latin" => "ig-pay atin-lay"
// 3) "Pig Latin" => "ig-Pay atin-Lay"

const covertToPigLatin = (input:string):string => {
   const arrInput = input.split(" ")
   const arrOut:string[] = []
   for (const item of arrInput) {
     arrOut.push(`${item.slice(1)}-${item.charAt(0)}ay`)     
   }
   return arrOut.join(" ")
}

const result = covertToPigLatin("Pig Latin")
console.log("Here is the output")
console.log(result)

// 3) "Pig Latin" => "ig-Pay atin-Lay"
