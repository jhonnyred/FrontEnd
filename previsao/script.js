function buscar(event){
    event.preventDefault();

    const cidade = document.querySelector("#cidade").value;

    if (!cidade){
        alert('Por favor insira o nome de uma cidade');
        return;
    }

    const url = `https://wttr.in/${cidade}?format=3`

    fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            const resultado = document.querySelector("#resultado");
            resultado.innerHTML =`
                <h2>${data}</h2>`;
        })
        .catch(error =>{
            console.log('Erro: ', error)
        })



}