let aluno
let continuar = 's'
let homem = 0
let mulher = 0
let contador = 0
let maiornota = 0
let notatotal = 0
while(continuar === 's'){
    
    contador+=1
    let nota = Number(prompt('qual a nota? '))
    notatotal += nota
    let sexo = prompt('qual o sexo do aluno?')
    if (sexo == 'm'){
        homem +=1
        if (nota > maiornota){
            maiornota = nota
        }
    }else if(sexo == 'f' && nota > 7){
        mulher +=1
    }
    continuar = prompt('deseja cadastrar um aluno? ')

    
}

console.log(`a media geral foi ${notatotal / contador}`)
console.log(`a quantidade de homens cadastrados doi de ${homem}`)
console.log(`a quantidade de mulheres com nota acima de 7 foi de ${mulher}`)
console.log(`a maior nota entre os homens foi de ${maiornota}`)
