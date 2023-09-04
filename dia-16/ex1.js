let nomes = []
let senhas = []

let continuar = true

while (continuar){
    let opcao = Number(prompt('1 para cadastrar, 2 para login, 3 para exclusão e 4 para sair: '))
    switch(opcao){
        case 1:
            let nome = prompt('digite seu nome: ')
            let senha = prompt('crie sua senha: ')
            cadastrar(nome,senha)

            break
        case 2:
            let name = prompt('digite seu nome para logar: ')
            let pass = prompt('digite sua senha para logar: ')
            login(name,pass)
            break
        case 3:
            let nombre = prompt('digite o nome que deseja excluir: ')
            excluir(nombre)
            break
        case 4:
            continuar = false
            break
        default:
            console.log('opção inválida!')
    }
}

function cadastrar (nome, senha){
    nomes.push(nome)
    senhas.push(senha)
}

function login (nome, senha){
    let posicao = nomes.indexOf(nome)
    if(posicao != -1 && senhas[posicao] == senha){
       console.log('login realizado com sucesso!')
    }else{
        console.log('falha no login')
    }
}
function excluir (nome){
    let posicao = nomes.indexOf(nome)
    nomes.splice(posicao,1)
    senhas.splice(posicao,1)
}