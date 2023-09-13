const soma = document.getElementById('soma');
soma.innerHTML = 0;

const subtracaoAB = document.getElementById('subtracaoAB')
subtracaoAB.innerHTML = 0;

const subtracaoBA = document.getElementById('subtracaoBA')
subtracaoBA.innerHTML = 0;

const multiplicacao = document.getElementById('multiplicacao')
multiplicacao.innerHTML = 0;

const divisaoAB = document.getElementById('divisaoAB')
divisaoAB.innerHTML = 0;

const divisaoBA = document.getElementById('divisaoBA')
divisaoBA.innerHTML = 0;

const potenciaAB = document.getElementById('potenciaAB')
potenciaAB.innerHTML = 0;

const potenciaBA = document.getElementById('potenciaBA')
potenciaBA.innerHTML = 0;

const raizA = document.getElementById('raizA');
raizA.innerHTML = 0;

const raizB = document.getElementById('raizB')
raizB.innerHTML = 0;

const fatorialA = document.getElementById('fatorialA')
fatorialA.innerHTML = 0;

const fatorialB = document.getElementById('fatorialB')
fatorialB.innerHTML = 0;

const porcentagemAB = document.getElementById('porcentagemAB');
porcentagemAB.innerHTML = 0;

const porcentagemBA = document.getElementById('porcentagemBA')
porcentagemBA.innerHTML = 0;

const media = document.getElementById('media')
media.innerHTML = 0;



function calcularSoma(a, b) {
    return a + b;
}

function calcularSubtracao(a, b) {
    return a - b;
}

function calcularMultiplicacao(a, b) {
    return a * b;
}

function calcularDivisao(a, b) {
    return parseFloat((a / b).toFixed(4));
}

function calcularMedia(a, b) {
    return (a + b) / 2;
}

function calcularPotencia(a, b){
    return a ** b;
}

function calcularFatorial(n) {
    if (n === 0 || n === 1)
        return 1;
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

function calcularRaiz(n) {
    return parseFloat(Math.sqrt(n).toFixed(2));
}

function calcularPorcentagem(a, b) {
    return `${((a * 100) / b).toFixed(0)}%`;
}

function calcular() {
    const inputA = document.getElementById('primeiroNumero').value;
    const inputB = document.getElementById('segundoNumero').value;

    let a = parseFloat(inputA)
    let b = parseFloat(inputB)

    soma.innerHTML = calcularSoma(a, b);
    subtracaoAB.innerHTML = calcularSubtracao(a, b);
    subtracaoBA.innerHTML = calcularSubtracao(b, a);
    multiplicacao.innerHTML = calcularMultiplicacao(a, b);
    divisaoAB.innerHTML = calcularDivisao(a, b);
    divisaoBA.innerHTML = calcularDivisao(b, a);
    potenciaAB.innerHTML = calcularPotencia(a, b);
    potenciaBA.innerHTML = calcularPotencia(b, a);
    raizA.innerHTML = calcularRaiz(a);
    raizB.innerHTML = calcularRaiz(b);
    fatorialA.innerHTML = calcularFatorial(a);
    fatorialB.innerHTML = calcularFatorial(b);
    porcentagemAB.innerHTML = calcularPorcentagem(a, b);
    porcentagemBA.innerHTML = calcularPorcentagem(b, a);
    media.innerHTML = calcularMedia(a, b);

}