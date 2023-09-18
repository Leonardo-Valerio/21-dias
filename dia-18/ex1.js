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
    livroExiste(txt){
       
        while (true){
            let nomeLivro = prompt(txt)
            for (let i = 0 ; i < this.Acervo.length; i++){
                if (this.Acervo[i].Titulo == nomeLivro){
                    let indice = i
                return indice
                }
            }
          
            console.log('livro nao encontrado')
        }
        
    }
    exibirInfos(nomeLivro){
        if( nomeLivro >= 0){
            console.log(this.Acervo[nomeLivro].Titulo)
            console.log(this.Acervo[nomeLivro].Autor)
            console.log(this.Acervo[nomeLivro].Editora)
            console.log(this.Acervo[nomeLivro].Ano)
            console.log(this.Acervo[nomeLivro].Disponibiladade)
        }
        
       
    }
    emprestimo(nomeLivro){
        
        if (this.Acervo[nomeLivro].Disponibiladade == true){
            this.Acervo[nomeLivro].Disponibiladade = false 
            console.log(this.Acervo[nomeLivro].Disponibiladade)
            console.log('emprestimo realizado com sucesso')
        }else{
            console.log('livro nao disponivel para emprestimo')
        }
    }
    devolucao(nomeLivro){
        if(this.Acervo[nomeLivro].Disponibiladade == false){
            this.Acervo[nomeLivro].Disponibiladade = true
            console.log(this.Acervo[nomeLivro].Disponibiladade)
            console.log('livro devolvido com sucesso')
        }
        else{
            console.log('livro já em estoque ou foi devolvido anteriormente')
        }
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



while (true){
    let escolha = Number(prompt('digite a opção que deseja: 1 cadastrar livros, 2 para ver informações sobre os livros, 3 para fazer um emprestimo de livros, 4 para devolver livros e 5 para sair '))
    if (escolha == 1){
        exibir()
        console.log(arrayLivros)

    }
    else if(escolha == 2){

        let nomeLivro = minhaBiblioteca.livroExiste('Digite o nome do livro que deseja ver as informações: ');
        minhaBiblioteca.exibirInfos(nomeLivro)
    }
    else if(escolha == 3){
        let nomeLivro = minhaBiblioteca.livroExiste('Digite o nome do livro que deseja ver as informações: ');
        minhaBiblioteca.emprestimo(nomeLivro)
    }
    else if(escolha == 4){
        let nomeLivro = minhaBiblioteca.livroExiste('Digite o nome do livro que deseja ver as informações: ')
        minhaBiblioteca.devolucao(nomeLivro)
    }
    else if(escolha == 5){
        break
    }
}