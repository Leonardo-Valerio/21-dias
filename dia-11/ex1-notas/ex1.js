let continuar = 's'
let alunos = []
let notas = []
let i = 0
let soma = 0
while (continuar == 's'){
    
    alunos[i] = prompt('digite o nome do aluno: ')
    notas[i] = Number(prompt('digite a nota do aluno: '))
    soma += (notas[i])
    continuar = prompt('deseja continuar? s/n ')
    i++
}
for (let j= 0; j < alunos.length;j++){
    console.log(`o aluno ${alunos[j]} tirou ${notas[j]} na prova`)
}
console.log(`a média geral da turma foi de ${soma/alunos.length}`)
