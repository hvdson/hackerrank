let test1 = [9, [10, 20, 20, 10, 10, 30, 50, 10, 20]] 
let test2 = [10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]]

function sockMerchant(n, ar) {
    let dict = {}
    for (let item of ar) {
        if (dict[item]) {
            dict[item] += 1;
        } else {
            dict[item] = 1;
        }
    }
    let pairCount = 0
    let keys = Object.keys(dict)

    for (let key of keys) {
      pairCount += Math.floor(dict[key]/2)
    }

    return pairCount; 
}

console.log(sockMerchant(test1[0], test1[1]))