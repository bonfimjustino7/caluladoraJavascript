
// Tela
const screen = document.getElementsByClassName('screen')[0];
const operadores = document.getElementsByClassName('operators')[0].children;

// Operações
const somar = document.getElementById('somar');
const subtrair = document.getElementById('subtrair');
const multiplicar = document.getElementById('multiplicar');
const dividir = document.getElementById('dividir');
const limpar = document.getElementById('limpar');
const igual = document.getElementById('igual');

// Numeros
const zero = document.getElementById('zero');
const um = document.getElementById('um');
const dois = document.getElementById('dois');
const tres = document.getElementById('tres');
const quatro = document.getElementById('quatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const sete = document.getElementById('sete');
const oito = document.getElementById('oito');
const nove = document.getElementById('nove');
const ponto = document.getElementById('ponto');

// Variavéis auxiliares

let resultado;

// Funções
function incrementar(valor) {
    const valorTela = screen.innerText;

    if (valorTela) {            
        screen.innerText += valor;        
    } else {
        screen.innerText = valor;        
    }
}

function convertNumber(valor) {
    if (valor.indexOf('.') >= 0) {
        return parseFloat(valor);
    }
    return parseInt(valor);
}

function processar(operador, val1, val2) {
    const valor1 = convertNumber(val1);
    const valor2 = convertNumber(val2);
    
    switch (operador) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case 'x':
            return valor1 * valor2;
        case '÷':
            return valor1 / valor2;
        default:
            return null;
    }
}

function getResultado(operador) {
    const valor = screen.innerText;
    
    let resultadoClean;
    
    const operadoresValues = Array.from(operadores).map(elem => elem.dataset.val);
    operadoresValues.forEach(op => {
        if (valor.indexOf(op, 1) >= 0) {            
            const result = valor.split(op);
            resultadoClean = result.reduce((prev, current) => processar(op, prev, current));
            return;
        }
    });

    if (!resultadoClean) {
        resultadoClean = valor;
    }
    screen.innerText = resultadoClean;
}


// Eventos
limpar.addEventListener('click', function (e) {
    screen.innerText = '';
    operacoes = [];
});

zero.addEventListener('click', function (e) {
    incrementar(e.target.dataset.val);
});

um.addEventListener('click', function (e) {
    incrementar(e.target.dataset.val);
});

dois.addEventListener('click', function (e) {
    incrementar(e.target.dataset.val);
});

tres.addEventListener('click', function (e) {
    incrementar(e.target.dataset.val);
});

quatro.addEventListener('click', function (e) {
    incrementar(e.target.dataset.val);
});

cinco.addEventListener('click', function (e) {
    incrementar(e.target.dataset.val);
});

seis.addEventListener('click', function (e) {
    incrementar(e.target.dataset.val);
});

sete.addEventListener('click', function (e) {
    incrementar(e.target.dataset.val);
});

oito.addEventListener('click', function (e) {
    incrementar(e.target.dataset.val);
});

nove.addEventListener('click', function (e) {
    incrementar(e.target.dataset.val);
});

ponto.addEventListener('click', function (e) {    
    incrementar(e.target.dataset.val);
});

somar.addEventListener('click', function (e) {
    if (screen.innerText) {
        getResultado();
        incrementar(e.target.dataset.val);            
    }
 });

subtrair.addEventListener('click', function (e) {
    if (screen.innerText) {
        getResultado();
        incrementar(e.target.dataset.val);            
    }
});

multiplicar.addEventListener('click', function (e) {
    if (screen.innerText) {
        getResultado();
        incrementar(e.target.dataset.val);            
    }    
});

dividir.addEventListener('click', function (e) {
    if (screen.innerText) {
        getResultado();
        incrementar(e.target.dataset.val);            
    }  
});

igual.addEventListener('click', function (e) {
    getResultado();
});
