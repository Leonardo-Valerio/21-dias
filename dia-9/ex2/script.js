let nome = prompt('digite seu nome: ')
    let idade = Number(prompt('digite sua idade: '))
    let salario = Number(prompt('digite seu salario atual: '))
let certeza = prompt('tem certeza que digitou todos os dados corretamente? (s/n)')
while(certeza === 'n'){
    nome = prompt('digite seu nome: ')
    idade = Number(prompt('digite sua idade: '))
    salario = Number(prompt('digite seu salario atual: '))
    certeza = prompt('tem certeza que digitou todos os dados corretamente? (s/n)')
}
console.log(`Nome : ${nome}, Idade = ${idade}, Salario : ${salario}`)
let aumento = 1.5
let novosal
for (let ano = 2024; ano <= 2034; ano ++){
    novosal = salario + ((aumento/100)*salario)
    
    aumento = aumento*2
    console.log(`${ano} = ${novosal}`)
}