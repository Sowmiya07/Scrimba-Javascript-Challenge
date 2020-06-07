function sumAllPrimes(num) {
    let sum = 0;
    for(let i = 2; i < num ; i++) {
        let  j = 2;
        while(j <= i) {
            if(i === j)
                sum += i
            if(i % j === 0)
                break
            j++
        }
    }
    return sum
}

console.log(sumAllPrimes(10));