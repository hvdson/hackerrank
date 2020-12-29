let test1 = [8, 'UDDDUDUU']
let test2 = [12, 'DDUUDDUDUUUD']

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 * 
 *  Given the sequence of up and down steps during a hike, 
 *  find and print the number of valleys walked through.
 */ 
function countingValleys(steps, path) { 
  let U = 1
  let D = -1
  let numOfValleys = 0;
  let currCount = 0;

  // keep track of currCount
  // compare current with last
  // if curr is U and curr + currCount === 0 increase count numOfValleys
  for (let step of path) {
    if (step === 'U') {
      if (currCount + U === 0) {
        numOfValleys += 1        
      }
      currCount += 1;
    } else if (step === 'D') {
      currCount -= 1;
    }
  }

  return numOfValleys;
}

console.log(countingValleys(test1[0], test1[1]))
console.log(countingValleys(test2[0], test2[1]))

