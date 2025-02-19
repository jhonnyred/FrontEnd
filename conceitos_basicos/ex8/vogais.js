string = 'nem tudo que reluz eh ouro, como nem tudo que cai do ceu eh sagrado'
let referencia = ['a', 'e', 'i', 'o', 'u']
let vogais = 0

for (i in string){
    for (j in referencia){
        if (string[i] == referencia[j]){
            vogais++
        }else{
            continue
        }
    }
}

console.log(vogais)