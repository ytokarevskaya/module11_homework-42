function printNumbers(startTimer, endTimer) {
    const intervalId = setInterval(function () {       
        console.log(startTimer);
        startTimer++;
        if (startTimer === endTimer + 1) {
            clearInterval(intervalId);
        };
    }, 1000); 
}

printNumbers(5, 10);

// Сам алгоритм таймера написан верно, но по заданию решение нужно было оформить в виде функции, чтобы один и тот же код можно было легко переиспользовать с разными входными данными. Выге исправила