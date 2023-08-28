let nome = prompt('digite o seu nome: ')

let idade = Number(prompt('digite sua idade: '))

let profissao = prompt('digite sua profissão: ')

let altura = Number(prompt('digite sua altura: '))
altura = altura.toFixed(2)

let peso = Number(prompt('diite seu peso: '))

console.log(`Seu nome é ${nome} vc tem ${idade} anos, sua profissão é de ${profissao}, sua alutura é de ${altura}M e seu peso é de ${peso}Kg`)

if (idade >= 18){
    console.log(`vc já pode tomar uma gelada`)
}else{
    console.log(`vai ficar sem gelada :(`)
}
console.log(`em meses vc tem ${idade*12} meses`)
console.log(`em semanas vc tem ${((idade * 365) / 7).toFixed(2)}  `)
console.log(`em dias vc tem ${idade * 365} `)

function calcular(altura,peso){
    let imc = peso / (altura*altura)
    imc = imc.toFixed(1)
    console.log(imc)
    let situacao
        if(imc < 18.5){
            situacao = 'Magreza'
        }
        else if( imc <24.9){
            situacao = 'Normal'
        }
        else if ( imc < 30){
            situacao = 'Sobrepeso'
        }
        else{ 
            situacao = 'Obesidade'
        }
        
        return situacao
    }
console.log(calcular(altura,peso))
let continuar = 's'
while (continuar === 's'){
    let nasc = 2023 - idade
    let i = 0

    for(ano = nasc;ano <= 2023 ;ano ++){
    
        console.log(`${ano} = ${i}`)
        i+=1
    }
    continuar = prompt('quer continuar? s/n')
    if (continuar === 's'){
        idade = Number(prompt(`digite uma idade: `))
    }
}
