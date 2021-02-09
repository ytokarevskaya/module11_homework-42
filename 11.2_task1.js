const mas = [1,2,3,"Roman",4,5,6,null,7,8,9,0,10,0,11,NaN];

function quantityNumbers() {
    let even = 0, notEven = 0, zero = 0;
    mas.forEach(function(el) {
        if (typeof(el) === 'number' && !isNaN(el)) {
            if (el === 0) {zero++}
            else if (el % 2 === 0) {even++}
            else {notEven++};
        }
    });
    console.log(`Чётных чисел: ${even}`);
    console.log(`Не чётных чисел: ${notEven}`);
    console.log(`Нулей: ${zero}`);
};

quantityNumbers();