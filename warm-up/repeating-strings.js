
// let test1 = [a, 1000000000000]
let test1 = ['aba', 12]
// let test1 = ['ceebbcb', 817723]
// let test1 = ['bab', 725261545450]
function repeatedString(s, n) {
  let returnVal = 0;
  if (s === 'a') {
    return n
  }
  
  let aMatch = s.match(/a/g)
  console.log(aMatch)
  if (aMatch) {
    let strMultiplier = Math.floor(n / s.length)
    let aCount = aMatch.length * strMultiplier
    returnVal += aCount;

    let moduloStr = s.substr(0,(n % s.length))
    if (moduloStr.match(/a/g)) {
      console.log(moduloStr)
      let moduloCount = moduloStr.match(/a/g).length;
      returnVal += moduloCount
    }
  } 
  return returnVal;
}

console.log(repeatedString(test1[0], test1[1]))

