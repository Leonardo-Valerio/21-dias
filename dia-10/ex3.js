let num = Number(prompt('digite um numero: '))
let fibo = num -1
let numeros = [fibo,num]
let i = 0
while (i < 10){
    let res = fibo + num
    numeros.push(res)
    fibo = num
    num = res
    i ++
}
console.log(numeros)