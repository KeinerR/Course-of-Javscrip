
//// 1 Crea un bucle que imprima los numero del 1 al 20
for (let i = 1; i <= 20; i++) {

    console.log(` numero ${i}`)
}


//////// 2 Crea un bucle que sume todos los numero del  1 al 100
let a = 1
let result = 1
let suma
while (a <= 100) {


    for (let index = 0; index < result; index++) {

        suma = a + result

        if (result == 100) {
            break
        }
        console.log(`${a}+ ${result} ${suma}`)
        result++
    }


    a++
    result = 1
}


/////// 3 Crea un bucle  que imprima todos los numeros paras entre 1 y 50


for (let num = 1; num < 50; num++) {

    if (num % 2 == 0) {
        console.log(num)
    }
}
///// 4 Dado un Arrays de nombre  usa un buble para imprimir cada nombre en consola

let arrayAnimal = ['Zorro', 'Oso', 'Cocodrilo', 'Tiburon', 'Raton']


let namArray = 0
do {

    console.log(`${arrayAnimal[namArray]}`)

    namArray++
} while (namArray < arrayAnimal.length)

/////5 Escribe un bucle  que cuente el numero de vocalees en una cadena de texto

let cadena = 'Hola como estas me llamo Keiner Rivas'

let letrasSobrante = 0
let letrasTotatel = cadena.length
for (let letra = 0; letra < cadena.length; letra++) {

    if (cadena[letra] != 'a' && cadena[letra] != 'e' && cadena[letra] != 'i' && cadena[letra] != 'o' && cadena[letra] != 'u') {
        letrasSobrante++

    }

}
console.log(`numero de vocales sobrante es de ${letrasTotatel - letrasSobrante} `)

/// 6  Dado un Array de numero usa un bucle para multiplicar todo los numero y mostar el product


let arrayNumber = [2, 3, 5, 6, 7, 8, 9]

let producto = 1
let numberArray = 0
while (numberArray < arrayNumber.length) {

    producto = producto * arrayNumber[numberArray]

    numberArray++

}
console.log(producto)


///7  Escribe un bucle que  imprima la tabla del multiplicar

let num = 5

for (let tableFive = 0; tableFive <= 10; tableFive++) {
    resulTableFive = num * tableFive
    console.log(`${num} * ${tableFive} ==${resulTableFive}`)

}

//// 8 Usa un bucle para invertir una  cadena de texto

let textCadena = 'Hola como estas me llamo Juana Maria';
let cadenaInvertida = '';

for (let i = textCadena.length - 1; i >= 0; i--) {
    cadenaInvertida += textCadena[i];
}

console.log(cadenaInvertida);


/// 9 Usa un bucle para generar los primeros 10 numero dela secuencia Fibonacci


let num2 = 0
let num1 = 1
let Fibonaccinum = 0
console.log(num2);
console.log(num1);


let numDat = 0
do {

    numDat = num1 + num2
    num2 = num1
    num1 = numDat


    console.log('num data ' + numDat);



    Fibonaccinum++
} while (Fibonaccinum < 10)


///// 10 Dado un Array  de numero usa un bucle para crear un nuevo array que contenga los numero mayores a 10



let arraysNumber = [20, 54, 25, 30, 82, 70, 75, 42, 15, 96, 3, 5, 2, 3, 1, 5, 89, 7, 4, 1, 5,]
let nuevoarray = []

for (let index = 0; index < arraysNumber.length; index++) {


    if (arraysNumber[index] > 10) {
        nuevoarray.push(arraysNumber[index])
    }


}
console.log(nuevoarray)