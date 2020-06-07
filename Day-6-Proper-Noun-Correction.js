function properNounCorrection(str) {
    return str.slice(0, 1).toUpperCase() + 
        str.slice(1, str.length).toLowerCase()
}

console.log(properNounCorrection("pArIs"));