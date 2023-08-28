let continuar = 's'
let modelo = []
let ano = []
let valor = []
let i = 0

while (continuar == 's'){
    
    modelo[i] = prompt('digite o modelo do carro: ')
    ano[i] = Number(prompt('digite o ano do carro: '))
    valor[i] = Number(prompt('digite o valor do carro: '))
    continuar = prompt('deseja continuar? s/n ')
    i++
}
for (let j= 0; j < modelo.length;j++){
    console.log(`o carro ${modelo[j]} do ano de ${ano[j]} tem o valor de ${valor[j]} reais`)
}
for(let i = 0; i < modelo.length - 1;i ++){
    for (let j = 0 ; j < modelo.length - i - 1;i++){
        if(valor[j] > valor[j + 1]){
            let modeloMaiorValor = modelo[j]
            modelo[j] = modelo[j + 1]
            modelo[j + 1] = modeloMaiorValor

            let anoMaiorValor = ano[j]
            ano[j] = ano[j + 1]
            ano[j + 1] = anoMaiorValor

            let valorMaiorValor = valor[j]
            valor[j] = valor[j + 1]
            valor[j + 1] = valorMaiorValor
        }
    }
}

for(let i = 0; i < modelo.length;i++){
    console.log(`${modelo[i]} - ${ano[i]} - ${valor[i]}`)
}