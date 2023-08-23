let n1 = Number(prompt('digite um numero: '))
let n2 = Number(prompt('digite outro numero: '))

let operador = prompt('digite o operador')
let res;
switch(operador){
    
    case "+":
        res = n1 + n2
        break
    case "-":
        res = n1 - n2
        break
    case "*":
        res = n1 * n2
        break
    case "/":
        res = n1 / n2
        break
    default:
        console.log('nao foi possivel identificar o operador')
        break

}
console.log(res)