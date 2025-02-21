let simples = (capital, taxa, tempo) => capital + (capital*(taxa/100)*tempo)

let compostos = (capital, taxa, tempo) => capital*Math.pow((1+(taxa/100)), tempo)

console.log('SIMPLES \ncapital: R$1343,98 \ntaxa: 5% \ntempo: 7 meses \n\nsaldo: R$', (simples(1343.98,5,7)).toFixed(2)+'\n\n\n')
console.log('compostos \ncapital: R$1343,98 \ntaxa: 5% \ntempo: 7 meses \n\nsaldo: R$', (compostos(1343.98,5,7)).toFixed(2))