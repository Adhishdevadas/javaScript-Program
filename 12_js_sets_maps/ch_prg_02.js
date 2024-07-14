const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const union = [...new Set([...a, ...b])];
console.log("Union of a and b:", union); // Output: [ 4, 5, 8, 9, 3, 7 ]


const intersection = a.filter(value => b.includes(value));
console.log("Intersection of a and b:", intersection); 
