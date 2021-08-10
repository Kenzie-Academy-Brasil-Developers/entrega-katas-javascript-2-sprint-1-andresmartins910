// comece a criar a sua função add na linha abaixo
function add(x, y) {
    return x + y
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(x, y) {
    let resultado = 0
    for (i = 0; i < x; i++) {
        resultado = add(resultado, y)
    }
    return resultado
}
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, y) {
    let resultado = 0
    let z = x
    for (let i = 1; i < y; i++) {
        resultado = multiply(z, x)
        z = resultado
    }
    return resultado
}
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(x) {
    let resultado = 0
    let z = x
    for (let i = x - 1; i > 0; i--) {
        resultado = multiply(z, i)
        z = resultado
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
// 0 1 1 2 3 5 8 13 21
function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }


// descomente a linha seguinte para testar sua função
    console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
