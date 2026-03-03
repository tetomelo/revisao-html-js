const usuarios = [
  { nome: 'Melba', sobrenome: 'Stein', idade: 15, temAnimalEstimacao: false },
  { nome: 'Donovan', sobrenome: 'Barrera', idade: 18, temAnimalEstimacao: false },
  { nome: 'Gross', sobrenome: 'Maldonado', idade: 25, temAnimalEstimacao: true },
  { nome: 'Massey', sobrenome: 'Waller', idade: 16, temAnimalEstimacao: true },
  { nome: 'Harris', sobrenome: 'Bowers', idade: 22, temAnimalEstimacao: true },
  { nome: 'Roberson', sobrenome: 'Hancock', idade: 30, temAnimalEstimacao: false },
];

usuarios.forEach(function(usuario) {
  if (usuario.idade >= 18) {
    console.log(`${usuario.nome} ${usuario.sobrenome} - ${usuario.idade} anos`);
  }
});