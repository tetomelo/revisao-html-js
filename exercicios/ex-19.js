const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

const resultado = numeros.map(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
});

console.log(resultado);