//Find the maximum number in an array
function findMaximum(arrnum) {
    let max = arrnum[0];
    for(let i = 1; i < arrnum.length; i++){
        if (arrnum[i] > max) {
            max = arrnum[i];
        }
    }
    return max;
}
let arrnum = [4, 8, 2, 11, 6, 7, 10];
console.log("Array:",arrnum);
console.log("Maximum Number:", findMaximum(arrnum));


// Calculate the sum of all elements

const findSum = function(arrsum) {
    let sum = 0;
    for(let i = 0; i < arrsum.length; i++) {
        sum +=arrsum[i];
    }
    return sum;
};
let arrsum = [4, 8, 2, 11, 6, 7, 10];
console.log("Sum of all Elements:", findSum(arrsum));

//Count the number of odd numbers in the array
let numbers = [4, 8, 2, 11, 6, 7, 10];
const countOddNumbers = (array) => {
    let count = 0;
    for (let i = 0; i<array.length; i++){
        if (array[i] % 2 !==0){
            count++;
        }
    }
    return count;
};
console.log("Count of Odd Numbers :", countOddNumbers(numbers));