
let test1 = [7, [0, 0, 1, 0, 0, 1, 0]]

function jumpingOnClouds(n, c) {
  // loop through array
  let count = -1;
  for (let i = 0; i < n;  i++, count++ ) {
    // greedy solution - check i+2 is in idx && value 0 
    if (i+2 < n && c[i+2] === 0) {
      i++;
    }
  }
  return count; 
}

console.log(jumpingOnClouds(test1[0]-1, test1[1]))