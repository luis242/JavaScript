var pessoa = {nome: 'Fabricio'};
  
pessoa.imprimeNome = function() {
    console.log('Olá, meu nome é ' + this.nome);
}
  
pessoa.imprimeNome();

var boasvindas = pessoa.imprimeNome;
boasvindas();

console.log(Object); //ƒ Object() { [native code] }
console.log(Array); //ƒ Array() { [native code] }
console.log(Function); //ƒ Function() { [native code] }