function addBorder(array) {
    for(let i=0; i < array.length; i++) {
        array[i] = '*' + array[i] + '*'
    }
    let pattern = '*'.repeat(array[0].length)
    array.push(pattern)
    array.unshift(pattern)
    return array
}

console.log("Day 1 Add Border Challenge")
console.log(addBorder(['abc', 'def'])) 
