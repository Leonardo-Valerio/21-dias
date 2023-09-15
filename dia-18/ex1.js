let arrayLivros=[]
class livros{
    Titulo
    Autor
    Editora
    Ano
    Disponibiladade

    constructor(titulo,autor,editora,ano){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.Ano = ano
        this.Disponibiladade = true
    }
}
class biblioteca{
    Nome
    Endereco
    Telefone
    Acervo
    constructor(nome,endereco,telefone){
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.Acervo = []
    }
    exibirInfos(nomeLivro){
        for (let i = 0; i < this.Acervo.length; i++){
            if (this.Acervo[i].Titulo == nomeLivro){
                console.log(this.Acervo[i].Titulo)
                console.log(this.Acervo[i].Autor)
                console.log(this.Acervo[i].Ano)
                console.log(this.Acervo[i].Disponibiladade)
                return true
            }
        }
        return false
       
    }
    emprestimo(nomeLivro){
        for (let i = 0; i < this.Acervo.length; i++){
            if (this.Acervo[i].Titulo == nomeLivro){
                
                return true
            }
        }
        return false
       
    }
   
}
const minhaBiblioteca = new biblioteca('Biblioteca Central', 'Rua ABC, 123', '1111-1111')

function exibir(){
    let titulo = prompt('digite o livro que deseja cadastrar')
    let autor = prompt('qual o nome do autor do livro? ')
    let editora = prompt('qual o nome da editora? ')
    let ano = Number(prompt('qual o ano do livro? '))
    let livro = new livros(titulo,autor,editora,ano)
    arrayLivros.push(livro)
    minhaBiblioteca.Acervo.push(livro)
    
    

    
}
function buscarLivros(txt){
    let livro = prompt(txt)
    while(!minhaBiblioteca.exibirInfos(livro)){
        livro = prompt(txt)
        if (livro){
            minhaBiblioteca.exibirInfos(livro)

            break
        }
        else{
            console.log('livro nao encontrado')
        }
    }

    

}


while (true){
    let escolha = Number(prompt('digite a opção que deseja: 1 cadastrar livros, '))
    if (escolha == 1){
        exibir()
        console.log(arrayLivros)

    }
    else if(escolha == 2){

        buscarLivros('digite o livro que deseja ver as info: ')
    }
    else if(escolha == 3){
        break
    }
}