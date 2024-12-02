////// 1 Crea una function que reciba dos numeros y devuelva  su suma

function suma(a, b) {

    return a + b
}


let result = suma(4, 9)
console.log(result)

result = suma(10, 100)
console.log(result)



////// 2 Crea una function que reciba  un array de numeros y devuelva el mayor de ellos

let arraNumbers = [1, 2, , 6, 8, 78, 952, 1, 23, 1000, 1, 55, 8, 4, 56, 855554, 2352, 120301, 25]

const arraNumber = (arrray) => {
    let maximo = 0
    for (let i = 0; i < arrray.length; i++) {


        if (maximo < arrray[i]) {
            maximo = arrray[i]



        }
    }


    return maximo
}

const data = arraNumber(arraNumbers)

console.log(`El numero mayor es el ${data}`)


////3 Crea una function que reciba un string  y devuelva  el numero de vocales que contiene



function numberVocales(arrarVocal) {

    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let numeroVocales = 0
    let i = 0
    while (i < arrarVocal.length) {

        if (vocales.includes(arrarVocal[i])) {
            numeroVocales++
        }

        i++

    }
    return numeroVocales
}
let arrarVocal = 'El color de mi uniforme es Amarillo'

console.log(numberVocales(arrarVocal))


/// 4 Crea una function que reciba  un array de string  y devuelva  un nuevo array con los estring en mayusculas




const arrayMayus = (arrayMayusCula) => {

    let newArrays = []
    for (let i = 0; i < arrayMayusCula.length; i++) {

        newArrays.push(arrayMayusCula[i].toUpperCase())
    }

    return newArrays
}

let arrayMayusCula = ['juan', 'carolina', 'jose', 'gregory', 'ramsy', 'quintero']
let response = arrayMayus(arrayMayusCula)
console.log(response)


//// 5 Crea una function  que reciba  un numero  y devuelva  true si es primo y false e n caso contrario

function esPrimo(n) {
    // Paso 1: Si el número es menor o igual a 1, no es primo
    if (n <= 1) {
        return false;
    }

    // Paso 2: Si el número es 2, es primo
    if (n === 2) {
        return true;
    }

    // Paso 3: Comprobamos si el número tiene divisores entre 2 y la raíz cuadrada de n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {  // Si n es divisible por i
            return false;  // No es primo
        }
    }

    // Si no tiene divisores, es primo
    return true;
}

// Ejemplo de uso
console.log(esPrimo(11));  // Devuelve true
console.log(esPrimo(4));   // Devuelve false

/// esta no la hice yo

//// 6 Crea una function que reciba dos arrays y devuelva un nuevo array  que contenga los elemento comunes entre ellos

let arrayDream = ['Reyes', 'Van der Builg', 'Quintero', 'Ramsey', 'Kante', 'Asensio', 'Dybala', 'Messi', 'Neymar', 'Cristiano']
let arrayReal = ['Armani', 'Vargas', 'James', 'Mina', 'Vinicius', 'Quintero', 'Ramsey', 'Roger', ' Messi', 'Neymar', 'Cristiano', 'Pele', 'Maradona']




const dataSoccer = (Real, Soccer) => {

    let newArrays = []


    for (let index = 0; index < Real.length; index++) {




        if (arrayDream.includes(Real[index])) {

            console.log(arrayDream.includes(Real[index]))

            newArrays.push(Real[index])
        }

    }

    return newArrays
}

let dataResult = dataSoccer(arrayReal, arrayDream)
console.log(dataResult)

//// 7 Crea una function que  reciba un array de numeros  y devuelva  la suma de todos los numero  paraes


let arrarNumberPar = [1, 2, 5, 3, 6, 5, 6, 32, 56, 2, 5, 6, 36, 6, , 2, 56, 2, 5, 55, 2, 556, 2, 65, 23236, 6, 3, 23, 56, 3, 3, 63, 3, 6, 6, 636, 56, 5, 6, 6, 5, 5, 66, 3, 3, 6, 6, 33, 2, 2, 32, 12, 2, 33]

function sumaNumberPair(data) {

    let sumaData = 0
    for (let index = 0; index < data.length; index++) {

        if (data[index] % 2 == 0) {

            sumaData += data[index]
        }


    }
    return sumaData

}

let myResult = sumaNumberPair(arrarNumberPar)
console.log(myResult)



//// 8 Crea  un afunction que reciba  un array  de numeros y devuleva un nuevo array con cada numero elevado al cuadrado
let arrarNumberElevado = [1, 2, 5, 3, 6, 5, 6, 32, 56, 2, 5, 6, 36, 6, , 2, 56, 2, 5, 55, 2, 556, 2, 65, 23236, 6, 3, 23, 56, 3, 3, 63, 3, 6, 6, 636, 56, 5, 6, 6, 5, 5, 66, 3, 3, 6, 6, 33, 2, 2, 32, 12, 2, 33]


function numberElevado(data) {

    let newArray = []
    for (let index = 0; index < data.length; index++) {
        newArray.push(data[index] ** 2)

    }
    console.log(newArray)
}


numberElevado(arrarNumberElevado)


//// 9  Crea una function  que reciba  una cadena de  texto y devuelva  la mismn acadena de texto  con las palabras  en orden inversas







function cadenaText(data) {

    let newCadena = ''

    for (let index = data.length - 1; index >= 0; index--) {
        newCadena += data[index];

    }

    return newCadena
}

let datacadena = cadenaText('The best friend  of my brothersr')

console.log(datacadena)


//// 10 Crea una function que calcule el factorial de un numero dado



// const factorial = (number) => {

//     let numberconsecutivomenor = number
//     let factorialNumber = numberconsecutivomenor
//     for (i = 0; i < number; i++) {
//         console.log(' numero  factorialNumber', factorialNumber)

//         numberconsecutivomenor--
//         factorialNumber *= numberconsecutivomenor

//     }


//     return factorialNumber
// }

// let dataFactorial = factorial(5)

// console.log(dataFactorial)

/// lo hize yo



////  esto lo hizo chatgpt

// const factorial = (number) => {
//     let factorialNumber = 1; // Initialize factorialNumber to 1

//     for (let i = number; i > 1; i--) {
//         factorialNumber *= i;
//     }

//     return factorialNumber;
// };

// let dataFactorial = factorial(5);
// console.log(dataFactorial); // Output: 120