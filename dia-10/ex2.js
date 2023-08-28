let i = 0
let numeros = []
let numerosi = []
let limite = Number(prompt('deseja adicionar quantos numeros ao array? '))
while (i < limite){
   let num = Number(prompt('digite um numero: '))
    numeros[i] = num
    i++
}

console.log(numeros)

let contador = limite - 1
for (let i = 0;i < 5;i++){
    numerosi[i] = numeros[contador]
    contador --
}
console.log(numerosi)