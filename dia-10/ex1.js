let num = Number(prompt('digite um número: '))
let numeros = [2,7,4,3,num,8,9,12,1]

for (let i = 0; i<numeros.length;i++){
    if (num == numeros[i]){
        console.log(`o numero ${num} se encontra na posição ${i}\n`)
    }
}
