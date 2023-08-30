class Aluno{
    nome 
    idade
    areaDeatuacao
    constructor(nome,idade,areaDeatuacao){
        this.nome = nome
        this.idade = idade
        this.areaDeatuacao = areaDeatuacao
    }
}
console.log('====Cadastro de ALunos====')
let alunoUm = new Aluno('Giovanni', 23)
let alunos = []
let continuar = true
let indexAluno = 0
while(continuar){
    let nome = prompt('digite seu nome: ')
    let idade = Number(prompt('digite sua idade: '))
    let areaDeatuacao = prompt('digite a sua area de atuação: ')
    let aluno = new Aluno(nome,idade,areaDeatuacao)
    alunos[indexAluno] = aluno
    continuar = prompt('deseja continuar? ')
    if (continuar == 'n'){
        continuar = false
        continue
    }
    indexAluno ++

}

