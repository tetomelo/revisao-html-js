let carro = {
    marca: 'BMW',
    modelo: 'IX',
    ano: 2026 
};

console.log("Marca:", carro.marca);
console.log("Modelo:", carro.modelo);
console.log("Ano:", carro.ano);

carro.cor = 'Preto';

console.log("Objeto com cor adicionada:", carro.cor);
 delete carro.ano;
console.log("Objeto após remoção do ano:", carro);