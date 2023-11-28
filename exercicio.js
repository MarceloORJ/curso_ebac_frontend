function Funcionario(nome, cargo, conhecimentos, salario){
    this.nome = nome;
    this.cargo = cargo;
    this.conhecimentos = conhecimentos;
    this.salario = salario;
}

const funcionario1 = new Funcionario("Marcelo", "dev front-end", ['html', 'css', 'javaScript'], 5000);
const funcionario2 = new Funcionario("Lucas", "dev back-end",['Java'], 5000);
const funcionario3 = new Funcionario("Maria", "dev Full-Stack",['html', 'css', 'JavaScript', 'Python'], 7000);

console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);