class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno1 = new Aluno('João', 6);
const aluno2 = new Aluno('Maria', 3);
const aluno3 = new Aluno('Pedro', 5);
const aluno4 = new Aluno('Sarah', 10);

construtorArrayAlunos = (...aluno) => {
        let alunosArray = []

        aluno.forEach(aluno => {
            alunosArray.push(aluno)
        })

        return alunosArray;
}

let turma = construtorArrayAlunos(aluno1, aluno2, aluno3, aluno4);
console.log(turma);

function filtraAlunosAprovados (aluno) {
    return aluno.nota >= 6;
}
const alunosAprovados = turma.filter(filtraAlunosAprovados);
console.log(alunosAprovados);