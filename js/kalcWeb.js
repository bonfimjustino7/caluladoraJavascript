
// Tela
const screen = document.getElementsByClassName('screen')[0];

// Operações
const operadores = document.querySelectorAll('.buttons .operators button');

const operadoresValues = Array.from(operadores).map(elem => elem.dataset.val);

// Numeros
const botoes = document.querySelectorAll('.buttons .numbers button');

// Variavéis auxiliares
let permitirPonto = true;

// Funções
function incrementar(valor) {    
    const valorTela = screen.innerText;
    const valores = valorTela.split('');
    const ultimoValor = valores[valores.length - 1];

    if (valores.length >= 15) return;

    if (valor === '.') {
        if (!permitirPonto || operadoresValues.includes(ultimoValor)) {
            return;
        }
        permitirPonto = false;
    }

    // Se houver erro no console limpa e atribui o valor
    if (valorTela === 'Infinity' || valorTela === '-Infinity') {
        screen.innerText = valor;
        return;
    }

    // Se o ultimo valor for um operador ou ponto e o valor a ser inserido também for substitui o ultimo valor pelo o atual
    if (operadoresValues.includes(ultimoValor) && operadoresValues.includes(valor) || ultimoValor === '.' && operadoresValues.includes(valor) ) {        
        valores[valores.length - 1] = valor;
        screen.innerText = valores.join('');
    }
    
    else if (valorTela) {        
        screen.innerText += valor;
        
    } else {
        screen.innerText = valor;        
    }
}


function getResultado(operador) {
    const valor = screen.innerText;
    const valores = valor.split('');    
    const ultimoValor = valores[valores.length - 1];
    let resultado;
    
    // Se o ultimo valor for um operador remove, calcula e mostra o resultado
    if (operadoresValues.includes(ultimoValor)) {
        valores.splice(valores.length - 1, 1);
        resultado = eval(valores.join('')).toString();
        if (resultado.indexOf('.') >= 0) { // caso o numero seja com ponto seta pra false a flag que permit pontuação
            permitirPonto = false;
        }
        
        
    } else { // senao mostra o resultado
        resultado = eval(valor).toString();
        
        if (resultado.indexOf('.') >= 0) { // caso o numero seja com ponto seta pra false a flag que permit pontuação
            permitirPonto = false;
        }
    }

    if (resultado === 'Infinity' || resultado === '-Infinity') {
        resultado = 'Erro ao dividir 0';
    }
    screen.innerText = resultado.slice(0, 15);
}


// Eventos
botoes.forEach((button) => {
    button.addEventListener("click", () => {
        const valor = button.getAttribute("data-val");
        if (valor === "clear") {
            screen.innerText = '';
            operacoes = [];
        } else {
            incrementar(valor);            
        }
    });
    
});

operadores.forEach((op) => {
    if (op.getAttribute("data-val") === "=") {
        op.addEventListener("click", () => {        
            getResultado(op.getAttribute("data-val"));
        });

    } else {
        op.addEventListener("click", () => {
            const valorClicado = op.getAttribute("data-val");            
            incrementar(valorClicado);                    
            permitirPonto = true; 
        });
    }
});
