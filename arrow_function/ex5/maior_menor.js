let menor_maior = (lista) => {
    let maior = lista[0]
    let menor = lista[0]
    let boliviano = true
    //MAIOR
    for (let num of lista){
        if(num > maior) maior = num
        if(num < menor) menor = num
    }
    return 'Maior: ' +maior+ '\nMenor: ' +menor
}


let numeros = [42, 86, 73, 19, 5, 121, 54, 98, 33, 76, 12, 65, 102, 9];
console.log(menor_maior(numeros))