function registro (){
    let colaborador = prompt('digite o seu nome: ')
    let salario = Number(prompt('digite seu salario: '))
    reajusteSalarial(colaborador,salario)
    
}
function reajusteSalarial(nome,salario){
    let porcentagem = 0
    let novoSalario = 0
    if (salario <= 1500){
        novoSalario = salario * 1.20
        porcentagem = 20
    }else if(salario <= 2000){
        novoSalario = salario * 1.15
        porcentagem = 15
    }else if(salario <= 3000){
        novoSalario = salario * 1.10
        porcentagem = 10
    }
    else{
        novoSalario = salario * 1.05
        porcentagem = 5
    }
    console.log(`O ${nome} tinha um salario de ${salario} e foi aumentado em ${porcentagem}% que resultou em ${novoSalario} reais`)
    
    recalcular()
   
}

function recalcular(){
    let resposta = prompt('deseja recalcular com novos valores? ')
    if (resposta == 's'){
        registro()
    }
    else{
        console.log('programa encerrado')
    }
}
registro()