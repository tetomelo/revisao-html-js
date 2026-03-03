const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

const resultado = numeros.map(numero => {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    } else if (numero % 3 === 0) {
        return "Fizz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    } else {
        return numero;
    }
});

console.log(resultado);