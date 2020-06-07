function evenDigitsOnly(number) {
    let arr = number.toString().split("")
        .map(n => parseInt(n))
        .filter(n => n%2 != 0)
        
    return arr.length === 0    
}

console.log(evenDigitsOnly(2468));
console.log(evenDigitsOnly(2348))