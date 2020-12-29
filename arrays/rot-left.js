let test1 = [1,2,3,4,5]

// m = rows, n = col
// function rotLeft(a, d) { 
//   // let rotatedArr = a.slice();
//   // try recursion?
//   // base case d = 0
//   if (d < 1) {
//     return a
//   }
//   let [first, ...rest] = a;
//   rest.push(first);
//   let returnArr = rotLeft(rest, d-1);
//   return returnArr;
// }

function rotLeft(a, d) { 
  let dPos = d % a.length;
  let slice1 = a.slice(0, dPos)
  let slice2 = a.slice(dPos, a.length+1)
  return slice2.concat(slice1)
}


console.log(rotLeft(test1, 4));


