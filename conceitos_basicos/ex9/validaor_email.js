let emailcerto = 'emailvalido@gmail.com'
let emailerrado = 'emailerrado@gmailcom'

let validacao = (email) => {
    if (email.indexOf('@') > 1 && email.indexOf('.') > email.indexOf('@')){
        return true
    }else{
        return false
    }
}

console.log('email certo: ', validacao(emailcerto))
console.log('email errado: ', validacao(emailerrado))