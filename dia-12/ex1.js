let encerrar = true
let nomes = []
let senhas = []
let i = 0
while (encerrar == true){
    let opcao = Number(prompt('digite uma opção, 1 para cadastrar, 2 para login, 3 para excluir, 4 para encerrar '))
    if (opcao == 1){
       
        nomes[i] = prompt('digite o nome do usuario: ')
        senhas[i] = prompt('digite a senha do usuario: ')
        i++
    }
    else if(opcao ==2){
        let usuario = prompt('digite o nome do usuario: ')
        let password = prompt('digite a senha do usuario: ')
        for (let i=0;i < nomes.length;i++){
            if (usuario == nomes[i] && password == senhas[i]){
                console.log('Positivo')
                break
            }
            
        }
    }
    else if(opcao == 3){
        let user = prompt('digite o nome do usuario q deseja excluir: ')
        let pass = prompt('digite a senha para excluir: ')
        for (let i = 0;i<nomes.length;i++){
            if(user == nomes[i] && pass == senhas[i]){
                nomes.splice(i,1)
                senhas.splice(i,1)
                break
            }
            
        }
    }
    else if(opcao == 4){
        encerrar = false
    }
    else{
        alert('opcao invalida')
    }
}
console.log(nomes)
console.log(senhas)