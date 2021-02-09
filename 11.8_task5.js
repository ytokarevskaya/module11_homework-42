const result = (x,n) => {
    let acc = 1;
    for(let i=1; i<=n; i++) {
      acc *= x;   
    };
    return acc;
};

console.log(result(2,3));