class hoteis{
    IdHotel
    Nome
    Categoria
    Endereco
    Numero
    constructor(idhotel,nome,categoria,endereco,numero){
        this.Nome = nome
        this.IdHotel = idhotel
        this.Categoria= categoria
        this.Endereco = endereco
        this.Numero = numero
    }
}
class reservas{
    Id
    IdHotel
    NomeResp
    DataEntrada
    DataSaida
    constructor(id,idhotel,nomeResp,dataEntrada,dataSaida){
        this.Id = id
        this.IdHotel = idhotel
        this.NomeResp = nomeResp
        this.DataEntrada = dataEntrada
        this.DataSaida = dataSaida  
    }
    
}
let arrayHoteis = []
let arrayReserva = []

function cadastrarHotel(){
    let idHotel = verficarIdExiste('digite o id do hotel: ', arrayHoteis)
    let nomeHotel = prompt('digite o nome do hotel que deseja cadastrar: ')
    let categoriaHotel  =  prompt('digite a categoria do hotel: ')
    let enderecoHotel = prompt('digite o endereco do hotel que deseja cadastrar: ')
    let numeroHotel = Number(prompt('digite o numero desse hotel: '))
    let hotel = new hoteis(idHotel,nomeHotel,categoriaHotel,enderecoHotel,numeroHotel)
    arrayHoteis.push(hotel)
    return arrayHoteis
}
function cadastrarReserva(){
    let idReserva = Number(prompt('digite o id da sua reserva: '))
    let idHotel = validarIdHotel('digite o id do hotel: ')
    let nomeResp = prompt('nome do responsavel: ')
    let dataEntrada = Number(prompt('digite a data de entrada: '))
    let dataSaida = Number(prompt('digite a data de saida: '))
    while (dataEntrada > dataSaida){
        console.log('erro! a entrada tem que ser menor do que a saida')
        dataEntrada = Number(prompt('digite a data de entrada: '))
        dataSaida = Number(prompt('digite a data de saida: '))
    }
    let reserva = new reservas(idReserva,idHotel,nomeResp,dataEntrada,dataSaida)
    arrayReserva.push(reserva)
    return arrayReserva

}
function verificarNum(input) {
    let num = Number(prompt(input));
    while (num != 1 && num != 2 && num != 3) {
        num = Number(prompt(input));
    }
    return num;
}
function filtrarPorIdHotel(idHotel){
    for (let i = 0 ; i < arrayReserva.length ; i++){
        if (idHotel == arrayReserva[i].IdHotel){
            for (let j = 0; j < arrayHoteis.length; j ++){
                if(idHotel == arrayHoteis[j].IdHotel){
                    console.log(arrayHoteis[j].Nome)
                }
            }
            console.log(arrayReserva[i].NomeResp)
            console.log(arrayReserva[i].DataEntrada)
            console.log(arrayReserva[i].DataSaida)
            
        }
        
    }
}
function filtrarPorIdReserva(idReserva){
    for (let i = 0; i < arrayReserva.length;i++){
        if (idReserva == arrayReserva[i].Id){
            for (let j = 0; j < arrayHoteis.length; j ++){
                if (arrayReserva[i].IdHotel == arrayHoteis[j].IdHotel){
                    console.log(arrayHoteis[j].Nome)
                    console.log(arrayHoteis[j].Endereco)
                }
            }
            console.log(arrayReserva[i].DataEntrada)
            console.log(arrayReserva[i].DataSaida)        
        }
    }
}
function filtrarPorNomePessoa(nomePessoa){
    for (let i = 0; i < arrayReserva.length;i++){
        if(nomePessoa == arrayReserva[i].NomeResp){
            for (let j = 0; j < arrayHoteis.length;j++){
                if(arrayReserva[i].IdHotel == arrayHoteis[j].IdHotel){
                    console.log(arrayReserva[i])
                    break                    
                }
            }
        }
    }
}
function filtrarPorCategoria(categoria){
    for (let i = 0;i < arrayHoteis.length;i ++){
        if ( arrayHoteis[i].Categoria == categoria){
            console.log(arrayHoteis[i])
        }
    }
}
function trocarNumero(idHotel,numero){
    for (let i = 0; i < arrayHoteis.length;i ++){
        if (idHotel == arrayHoteis[i].IdHotel){
            arrayHoteis[i].Numero = numero
            console.log(arrayHoteis[i])
        }
    }
}
function verficarIdExiste(ih,arrayHoteis){
    let liberaUsuario = 1
    do{
        let idHotel = prompt(ih)
        liberaUsuario = 1
        for (let i = 0 ; i < arrayHoteis.length; i++){
            if (arrayHoteis[i].IdHotel === idHotel){
                liberaUsuario = 2
                console.log('teste')
            }
        
        }
        if (liberaUsuario !=2){
            return idHotel
        }
        else{
            console.log('id já existente')
        }
        
    }while(liberaUsuario == 2)
}
function validarIdHotel(ih){
    let liberaUsuario = true
    while (true){
        let idHotel = prompt(ih)
        for (let i = 0;i < arrayHoteis.length;i++){
            if (arrayHoteis[i].IdHotel == idHotel){
                liberaUsuario = true
                break
            }
            liberaUsuario = false
        }
        if (liberaUsuario){
            return idHotel
        }
        else{
            console.log('erro, digite um id d ehotel valido')
        }
    }
}


let escolha = verificarNum('Digite a opção que deseja: 1 para cadastrar hotel, 2 para agendar reserva, 3 para sair')

while (true) {
    if (escolha === 1) {
        cadastrarHotel();
        console.log(arrayHoteis);
    } else if (escolha === 2) {
        cadastrarReserva();
        console.log(arrayReserva);
    }else if(escolha === 3){
        filtrarPorIdHotel(123)
        break
    } 
    escolha = verificarNum('Digite a opção que deseja: 1 para cadastrar hotel, 2 para agendar reserva, 3 para sair')
}
