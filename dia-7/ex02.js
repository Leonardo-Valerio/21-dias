let continuar = 1
let nome = prompt('digite seu nome: ')
let cpf = Number(prompt('digite seu cpf: '))
let valortotal = 0
let valormaior = 0
let contatdor = 0
let saldo = 0

do{
    
    let valor = Number(prompt('qual valor?'))
    while (valor < 0){
        valor = Number(prompt('vc nao pode sacar ou depositar negativo qual valor? '))
    }
    
    
    let opcao = Number(prompt('deseja a opcao de 1 para saque ou 2 para deposito? '))
    if (opcao === 2){
        saldo += valor
    }else if (opcao === 1){
        while (valor > saldo){
            valor = Number(prompt(`vc nao pode sacar um valor maior do que seu saldo, que é de ${saldo}, qual valor deseja sacar? `))
        }
        saldo -= valor
    }
    if (valor > valormaior){
        valormaior = valor
    }
    contatdor +=1
    valortotal+= valor
    continuar = Number(prompt('deseja continuar? 1 para que sim ou 2 para que não'))
    while(continuar != 1 && continuar != 2){
        continuar = Number(prompt('deseja continuar? 1 para que sim ou 2 para que não'))
    }
} while(continuar === 1)

console.log(`o saldo total é de ${saldo}`)
console.log('o maior valor foi de ' + valormaior)
console.log(`a media de valores foi de ${valortotal/contatdor}`)
