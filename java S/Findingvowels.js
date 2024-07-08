function countVowels(str) {

    const vowels = /[aeiouAEIOU]/g;
    const matches = str.match(vowels);
    return matches ? matches.length : 0;
  }
  

  console.log(countVowels("Hello, World!")); 
  console.log(countVowels("JavaScript")); 
  console.log(countVowels("OpenAI")); 
  console.log(countVowels("xyz"));
  