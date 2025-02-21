let identificador = (lado1, lado2, lado3) => {
    if(lado1==lado2 && lado1==lado3){
        return 'Equilatero'
    }else if(lado1==lado2 || lado1==lado3){
        return 'Isoceles'
    }else{
        return 'Escalenos'
    }
}
console.log("Exemplo 1: 5 5 5", identificador(5,5,5))
console.log('Exemplo 2: 4 4 7', identificador(4,4,7))
console.log('Exemplo 3: 3 4 5', identificador(3,4,5))