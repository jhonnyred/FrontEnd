let arredonda = (num1) => 'R$'+ num1.toFixed(2).replace('.', ',')

console.log(arredonda(0.30000000000000004))