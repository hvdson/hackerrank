let test1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

// m = rows, n = col
function sumHourglass(arr) { 
  let sumArray = [];
  let halfLen = Math.floor(arr.length / 2);
  // iterate through 2d array
  for (let m = 0; m <= halfLen; m++) {
    // calculate sum for current hourglass
    // append to new array
    for (let n = 0; n <= halfLen; n++) {
      sumArray.push(calculateFromTopLeft(m, n, arr))
      console.log(sumArray)
    }
  }
  // find the max value of sumArray & return
  return sumArray.reduce((a, b) => Math.max(a,b));
}

function calculateFromTopLeft(m, n, arr) {
  /* assumptions:
   - 6 x 6 array -> problem space reduced to 4 x 4 for a 3x3 hourglass
   - starting from top left (0,0) and analyzing matrix within 3x3 grid
   - greatest value it will check is n+2, m+2
  */
  let topLeft = arr[m][n], 
    topMid = arr[m][n+1],
    topRight = arr[m][n+2],
    center = arr[m+1][n+1],
    botLeft = arr[m+2][n],
    botMid = arr[m+2][n+1],
    botRight = arr[m+2][n+2]    
  
  return topLeft + topMid + topRight + center + botLeft + botMid + botRight;
}



console.log(sumHourglass(test1));


