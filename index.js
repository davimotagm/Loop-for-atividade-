// const fruits = ['banana', 'maça', 'abacate']
// let i = 0
// while (i < fruits.length) {
//     console.log(fruits[i]) //valor
//     console.log(i) //índice
//     i = i + 1
// }

// const list = ["a", 'b', 'c']
// let i = 0
// do {
//     console.log(list[i]) //valor
//     console.log(i) //índice
//     i = i + 1
// } while (i < list.length)



// PARTE 1

console.log('ATIVIDADE 1')
function renderUpToTwenty() {
    for (let a = 0; a <= 20; a++) {
        console.log(a);
    }
}
renderUpToTwenty()



console.log('ATIVIDADE 2')
function tenInTenToAHundred() {
    for (let b = 10; b <= 100; b += 10) {
        console.log(b);
    }
}
tenInTenToAHundred();



console.log('ATIVIDADE 3')
function oddUpToTwenty() {
    for (let c = 1; c <= 20; c += 2) {
        console.log(c);
    }
}
oddUpToTwenty();



console.log('ATIVIDADE 5')
function evenUpToTwenty() {
    for (let d = -10; d <= 0; d++) {
        console.log(d);
    }
}
evenUpToTwenty();



console.log('ATIVIDADE 6')
function inDescendingDirection() {
    for (let e = 10; e >= 0; e--) {
        console.log(e);
    }
}
inDescendingDirection();



console.log('ATIVIDADE 7')
function valoresQuadrado() {
    for (let f = 1; f <= 10; f++) {
        console.log(f * f);
    }
}
valoresQuadrado();







// PARTE 2

console.log('ATIVIDADE 1')
function valoresQuadrado() {
    for (let f = 15; f <= 200; f++) {
        console.log(f * f);
    }
}
valoresQuadrado();



console.log('ATIVIDADE 2')
function somatoria() {
    let soma = 0
    for (let a = 1; a <= 100; a++) {
        soma += a;
    }
    console.log(soma);
}
somatoria();



console.log('ATIVIDADE 3')
function divisiveisPorQuatro() {
    for (let a = 0; a <= 200; a++) {
        if (a % 4 === 0) {
            console.log(a);
        }
    }
}
divisiveisPorQuatro();


console.log('ATIVIDADE 4')
function mediaFinal() {
    let soma = 0;
    let interacao = 0;
    for (let a = 50; a <= 70; a += 2) {
        soma += a;
        interacao++;
        mediaDaInteracao = soma / interacao
    }
    console.log(`A soma é ${soma} e a média é ${mediaDaInteracao}.`)
}
mediaFinal();







// PARTE 3

console.log('ATIVIDADE 1')
function fibonacciNumbers(n) {

    let sequencia = [0, 1]

    for (i = 2; i < n; i++) {
        let proximo = (sequencia[i - 1] + sequencia[i - 2]) 
        sequencia.push(proximo)
    }
    console.log(sequencia);
}
fibonacciNumbers(15);



console.log('ATIVIDADE 2')
function quantidadeTotal() {

    let soma = 0
    let graos = 1    

    for (i = 1; i <= 64; i++) {
        soma += graos
        graos *= 2
    }
    console.log(`${soma} grãos no tabuleiro.`);
}

quantidadeTotal()