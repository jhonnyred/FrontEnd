function mudarCor() {
    const cores = ['red', 'blue', 'green', 'purple', 'orange'];
    const index = Math.floor(Math.random() * cores.length);
    document.getElementById("caixa").style.backgroundColor = cores[index];
}

function adicionarTarefa() {
    const texto = document.getElementById("tarefaInput").value;
    if (texto.trim() === '') return;
    const item = document.createElement("li");
    item.textContent = texto;
    document.getElementById("listaTarefas").appendChild(item);
    document.getElementById("tarefaInput").value = '';
}

let count = 0;
function incrementar() {
  count++;
  document.getElementById("contador").textContent = count;
}

function calcular(op) {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    if (isNaN(a) || isNaN(b)) return alert("Digite os dois números");
    if (op === '/' && b === 0) return alert("Impossível dividir por zero");

    let res = 0;
    if (op === '+') res = a + b;
    if (op === '-') res = a - b;
    if (op === '*') res = a * b;
    if (op === '/') res = a / b;

    document.getElementById("resultado").textContent = "Resultado: " + res;
}

function contarPalavras() {
    const texto = document.getElementById("texto").value.trim();
    const palavras = texto === "" ? 0 : texto.split(/\s+/).length;
    document.getElementById("totalPalavras").textContent = "Palavras: " + palavras;
}