let input = [1, 2, 3, 4, 5, 6, 7];
// let output = [];
// for (let i = 0; i < input.length; i++) {
//     const element = input[i];
//     //output[i] = element * element;
//     const result = element * element
//     output.push(result);
// }
function square(element) {
    return element * element;
}
//const square = x => x * x;

// input.map(function(element, index, array) {
//     console.log(element, array);
// });
// const result = input.map(square);
const result2 = input.map(x => x * x);
// console.log(result);
// console.log(result2);

const bigger = input.filter(x => x > 4);
console.log(bigger);