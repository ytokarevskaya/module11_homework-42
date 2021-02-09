function sum(numberOne) {
    return function(numberTwo) {
        return numberOne + numberTwo;
    };
};

const res = sum(5);
console.log(res(8));

//console.log(sum(5)(6));
