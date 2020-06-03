function firstDuplicate(a) {
    let min = Infinity
    let num = -1
    for(let i of a) {
        if(a.indexOf(i) != a.lastIndexOf(i) && a.lastIndexOf(i) != -1) {
            if(a.lastIndexOf(i) - a.indexOf(i) < min) {
                min = a.lastIndexOf(i) - a.indexOf(i)
                num = i;
            }
        }
    }
    return num
}

console.log("Day 3 - Find First Duplicate Challenge")
console.log(firstDuplicate([2, 4, 3, 5, 3, 2]))
console.log(firstDuplicate([2, 3, 6, 4, 5]))