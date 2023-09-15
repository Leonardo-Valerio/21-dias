let array1 = [13,20,10,22,24,20,27,17,19,14,24]
let array2 = [24,22,23,11,15,17,29,14,16,21,1]


function igualando(array1,array2){
    let array3 = []
    let cont = 0
    for(let i = 0;i < array1.length;i++){
        for(let j = 0;j < array2.length;j++){
            if (array1[i] == array2[j]){
                let igual = array1[i]
                array3.push(igual)
                
                j = array2.length
                for(let k = 0;k < array3.length;k++){
                    if (igual == array3[k]){
                        array3[k].splice(1,1)
                    }

                }
                
            }
        }
    }
    return array3
}

console.log(igualando(array1,array2))
/*
 for(let k = 0;k < array3.length;k++){
                    if (igual != array3[k]){
                        array3.push(igual)
                        break
                    }
                }
*/