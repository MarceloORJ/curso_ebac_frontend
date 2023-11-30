class Aluno{
    constructor(nomeDoAluno, notaDoAluno){
        this.name = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const alunos = [
    new Aluno('Marcelo', 7),
    new Aluno('Ana', 10),
    new Aluno('Felipe', 4),
    new Aluno('Carol', 9),
    new Aluno('Eduardo', 5)
]

function aprovado(){
    const aprovados = [];
    const reprovados = [];

    alunos.map((aluno) =>{
        if(aluno.nota >= 6){
            aprovados.push(aluno);
        }
        else{
            reprovados.push(aluno);
        }
    });
    return aprovados;
}

console.log(aprovado());
