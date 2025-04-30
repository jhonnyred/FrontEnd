// SETORES
let setores = [
    { id: 1, nome: "Tecnologia da Informação", sigla: "TI" },
    { id: 2, nome: "Recursos Humanos", sigla: "RH" },
    { id: 3, nome: "Financeiro", sigla: "FI" },
    { id: 4, nome: "Marketing e Vendas", sigla: "MK" },
    { id: 5, nome: "Produção e Operações", sigla: "PO" },
];

let selSector = document.querySelector('#sector')
setores.forEach(element =>{
    let option = document.createElement("option");
    option.value = element.id;
    option.textContent = element.nome;
    selSector.appendChild(option);
})

// CARGO
let cargos = [
    { id: 1, nome: "Analista de Sistemas", salário: "8500" },
    { id: 2, nome: "Assistente Administrativo", salário: "2500" },
    { id: 3, nome: "Secretário", salário: "4300" },
    { id: 4, nome: "Gerente de Vendas", salário: "6500" },
    { id: 5, nome: "Analista de Marketing", salário: "4500" },
];

let selPosition = document.querySelector('#position')
for(let i=0; i<setores.length; i++){
    let option = document.createElement("option");
    option.textContent = cargos[i]['nome'];
    option.value = cargos[i]['id'];
    selPosition.appendChild(option);
}

document.querySelector('#salary') = cargos.salário;


// CONVÊNIO
let convenios = [
    {
        id: 1,
        nome: "UNIMED",
        valor: { titular: 1500, dependente: 750 },
    },
    {
        id: 2,
        nome: "Intermédica",
        valor: { titular: 1400, dependente: 850 },
    },
];

let selInsurance = document.querySelector('#insurance')
convenios.forEach(element => {
    let option = document.createElement('option');
    option.value = element.id;
    option.textContent = element.nome;
    selInsurance.appendChild(option);
})

function salvar(event){
    event.preventDefault();
    const url = "https://681154a03ac96f7119a43c79.mockapi.io/acerolaDev/singOn"
    
    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    const cpf = document.querySelector('#CPF').value;
    const rg = document.querySelector('#RG').value;
    const position = document.querySelector('#position').value;
    const sector = document.querySelector('#sector').value;
    const insurance = document.querySelector('#insurance').value;
    const employee = {
        name: name,
        phone: phone,
        email: email,
        CPF: cpf,
        RG: rg,
        position: position,
        sector: sector,
        medicalInsurance: insurance
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
    .then(response => response.json())
    .then(data => {
        document.querySelector('#name').value = "";
        document.querySelector('#phone').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#CPF').value = "";
        document.querySelector('#RG').value = "";
    })
    .catch(error => {
        console.error("Error saving data", error)
    });

    const saved = document.querySelector('#saved')
    saved.innerHTML = "<p>Salvo!</p>"
}

