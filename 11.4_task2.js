function simpleOrNot(number) {
    let count = 0;
    for(let i=1; i<=number; i++) {
        if (number % i === 0) {
            count++;  
            if (count > 2 || number === 0 || number === 1) {
                return `${number} - число не простое`;
            };
        };
    };
    return `${number} - число простое`;
}

console.log(simpleOrNot(112));