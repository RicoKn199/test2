// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];
const merge = arr1.concat(arr2);

function result(arr1, arr2) {
  for(let i=0; i<arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  const res = [2, 3, 4, 5];
}

console.log(result(arr1, arr2));