let not_palindromo = 'palindromo'
let palindromo = 'radar'

let detector = (string) =>{
    let invertido = ''
    for(let i=string.length-1; i>=0; i--){
        invertido += string[i]
    }

    if (string == invertido){
        return true
    }else{
        return false
    }
}

console.log('Palindromo: ',detector(not_palindromo))
console.log('Radar: ',detector(palindromo))