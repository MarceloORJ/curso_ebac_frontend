function Funcionario(nome, cargo, conhecimentos, salario){
    this.nome = nome;
    this.cargo = cargo;
    this.conhecimentos = conhecimentos;
    this.salario = salario;
}

function devFront(nome){
    Funcionario.call(this, nome, "dev Front-End", ['html', 'css', 'javaScript'], 5000)
}
function devBack(nome){
    Funcionario.call(this, nome, "dev Back-End", ['Java'], 5000)
}
function devFull(nome){
    Funcionario.call(this, nome, "dev Full-Stack", ['Java'], 7000)
}

const funcionario1 = new devFront("Marcelo");
const funcionario2 = new devBack("Lucas");
const funcionario3 = new devFull("Maria");

console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);
