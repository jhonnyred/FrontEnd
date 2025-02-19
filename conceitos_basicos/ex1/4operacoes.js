const n1 = 5
const n2 = 17

let calculo = (num1, num2, operacao) => operacao(num1, num2)

let soma = (num1, num2) => num1+num2
let subtracao = (num1, num2) => num1 - num2
let divisao = (num1, num2) => num1/num2
let multiplicacao = (num1, num2) => num1*num2

console.log('soma: ', calculo(n1,n2,soma))
console.log('subtracao: ', calculo(n1, n2, subtracao))
console.log('divisao: ', calculo(n1, n2, divisao))
console.log('multiplicacao: ', calculo(n1, n2, multiplicacao))