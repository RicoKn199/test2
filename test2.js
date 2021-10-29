// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  var a = arr1.concat(arr2);
  for (var i=0; i<a.length; i++) {
    for (var j=i+1; j<a.length; j++) {
      if (a[i] === a[j])
      a.splice(j--, 1);
    } 
  }
  return a;
}

console.log(result(arr1, arr2));