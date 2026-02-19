let frutas = ["maçã", "banana", "laranja"];
frutas.forEach(function(fruta) {
    console.log(fruta);
})
frutas.push("uva");
console.log("Array após adicionar frutas");
console.log(frutas);

frutas.pop();
console.log("Array após remover a última fruta");
console.log(frutas);