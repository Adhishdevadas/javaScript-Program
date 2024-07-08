//math function
let str1 = "Hello";
let str2 = "World";

// Convert strings to arrays of char codes
let arr1 = str1.split('').map(char => char.charCodeAt(0));
let arr2 = str2.split('').map(char => char.charCodeAt(0));

// Ensure arr1 is the longer array for this method to work
if (arr1.length < arr2.length) [arr1, arr2] = [arr2, arr1];

for (let i = 0; i < arr2.length; i++) {
    arr1[i] = arr1[i] + arr2[i];
    arr2[i] = arr1[i] - arr2[i];
    arr1[i] = arr1[i] - arr2[i];
}

// Convert char codes back to strings
str1 = String.fromCharCode(...arr2);
str2 = String.fromCharCode(...arr1);

console.log(str1); // Output: World
console.log(str2); // Output: Hello




//array method
let str3 = "Hello";
let str4 = "World";

[str1, str2] = [str2, str1];

console.log(str1); // Output: World
console.log(str2); // Output: Hello

//string function
let str5 = "Hello";
let str6 = "World";

// Concatenate both strings with a delimiter
str1 = str1 + "|" + str2;

// Split the concatenated string and reassign
str2 = str1.split("|")[0];
str1 = str1.split("|")[1];

console.log(str1); // Output: World
console.log(str2); // Output: Hello