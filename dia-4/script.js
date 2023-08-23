let fome = prompt('você está com fome? ')
let dinheiro = prompt('você tem dinheiro? ')
let retaurante = prompt('o restaurante está aberto? ')

if (fome === 'nao' || dinheiro === 'nao' ){
    console.log('Hoje a janta será em casa')
}else if(fome === 'sim' && dinheiro === 'sim' && retaurante === 'nao'){
    console.log('Peça um delivery!')
}else{
    console.log('hoje a janta será no meu restaurante favorito!')
}