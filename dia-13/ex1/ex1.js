class Carro{
    nome 
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nome,potencia,velocidadeMaxima,aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }
    calculo(distancia){
        let resultado = distancia / (this.velocidadeMaxima/this.aceleracao)
        return resultado
    }
}
class Corrida{
    local
    tipo
    distancia
    vencedor
    constructor(local,tipo){
        this.local = local
        this.tipo = tipo
    }
    
}
let carros = []
let continuar = 's'
let indexCarro = 0
let indexVencedor = 0
let distancia = Number(prompt('qual distancia vc deseja percorrer? '))
while(continuar !== 'n'){
    let nome = prompt('qual a marca do carro? ')
    let potencia = Number(prompt('qual a potencia do carro? '))
    let velocidadeMaxima = Number(prompt('qual q velocidade max do carro? '))
    let aceleracao = Number(prompt('quantos segundos o carro leva para ir de 0km a 100km? '))
    let carro = new Carro(nome,potencia,velocidadeMaxima,aceleracao)
    carros[indexCarro] = carro
    Corrida.distancia = distancia
    let menor = carros[0].calculo(distancia)
    let atual = carros[indexCarro].calculo(distancia)
    if (atual < menor){
        menor = atual
        indexVencedor = indexCarro
    }
    Corrida.vencedor = menor 
    continuar = prompt('deseja continuar? ')
    if (continuar !== 'n') {
        indexCarro++
    }
}
console.log(`O carro mais rápido foi o ${carros[indexVencedor].nome}`)
